using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query.SqlExpressions;
using TalentHunters_BackEnd.DAL.Interfaces;
using TalentHunters_BackEnd.Models.Entities;
using TalentHunters_BackEnd.Models.Enums;
using TalentHunters_BackEnd.Models.HelperEntities;
using TalentHunters_BackEnd.Utilities;

namespace TalentHunters_BackEnd.DAL.Services
{
    public class EmployeeService : IEmployeeService
    {
        private readonly TalentHuntersContext _context;

        public EmployeeService(TalentHuntersContext context)
        {
            _context = context;
        }
        

        public async Task<Employee?> GetEmployeeById(long id)
        {
            var employee = _context.Employees.FirstOrDefault(u => u.Id == id);
            if (employee is not null)
            {
                return employee;
            }

            return null;
        }

        public async Task<List<EmployeeData>> GetEmployeeDataById(long id)
        {
            var employee = await GetEmployeeById(id);
            if (employee is not null)
            {
                List<EmployeeData> list = new();
                var employeeData = EmployeeCaster(employee);
                list.Add(employeeData);

                return list;
            }

            return null;
        }


        public async Task<List<EmployeeData>> GetAllEmployees()
        {
            var employees = await _context.Employees.ToListAsync();
            var convertedEmployees = EmployeesListCaster(employees);
            return convertedEmployees;
        }

        public async Task AddEmployee(Employee employee)
        {
            employee.HashedPassword = SecurePasswordHasher.Hash(employee.HashedPassword);
            
            _context.Employees.Add(employee);

            await _context.SaveChangesAsync();
        }

        public async Task UpdateEmployeeEmail(long id, string email)
        {
            var employeeToUpdate = await GetEmployeeById(id);
            if (employeeToUpdate is not null)
            {
                employeeToUpdate.Email = email;
                await _context.SaveChangesAsync();
            }
            

        }

        public async Task DeleteEmployee(long id)
        {
            var employeeToDelete = await GetEmployeeById(id);
            if (employeeToDelete is not null)
            {
                _context.Employees.Remove(employeeToDelete);
                await _context.SaveChangesAsync();
            }
            
        }

        public async Task<List<Employee>> GetEmployeesWithoutDivision()
        {
            throw new NotImplementedException();
        }

        public async Task<List<string>> GetAllEmails()
        {
            var emails = _context.Employees.Select(emp => emp.Email).ToListAsync();
            return await emails;
        }

        public async Task<Employee?> AuthenticateAsync(string email, string password)
        {
            var employee = await _context.Employees.FirstOrDefaultAsync(emp => emp.Email == email);
            if (employee is not null)
            {
                if (SecurePasswordHasher.Verify(password, employee.HashedPassword))
                {
                    return employee;
                }
            }

            return null;
        }

        public async Task<bool> CheckEmailExistInDatabase(string email)
        {
            var employees = await GetAllEmployees();
            if (employees.Any(emp => emp.Email == email))
            {
                return true;
            }

            return false;
        }

        private List<EmployeeData> EmployeesListCaster(List<Employee> employees)
        {
            var convertedEmployees = employees.Select(x => new EmployeeData()
            {
                Id = x.Id,
                Email = x.Email,
                First_Name = x.FirstName,
                Last_Name = x.LastName,
                Registration_Date = x.RegistrationDate,
                Employee_Role = x.EmployeeRole,
                Role = x.Role

            }).ToList();
            return convertedEmployees;
        }

        private EmployeeData EmployeeCaster(Employee employee)
        {
            var convertedEmployee = new EmployeeData()
            {
                Id = employee.Id,
                Email = employee.Email,
                First_Name = employee.FirstName,
                Last_Name = employee.LastName,
                Registration_Date = employee.RegistrationDate,
                Employee_Role = employee.EmployeeRole,
                Role = employee.Role
            };
            return convertedEmployee;
            
        }
    }
}

