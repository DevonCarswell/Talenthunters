using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TalentHunters_BackEnd.DAL.Interfaces;
using TalentHunters_BackEnd.Models.Entities;
using TalentHunters_BackEnd.Models.Enums;
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
            var employees = await GetAllEmployees();
            var employee = employees.FirstOrDefault(u => u.Id == id);
            if (employee is not null)
            {
                return employee;
            }

            return null;
        }

        public async Task<List<Employee>> GetAllEmployees()
        {
            var employees = _context.Employees.ToListAsync();
            return await employees;
        }

        public async Task AddEmployee(Employee employee)
        {
            employee.HashedPassword = SecurePasswordHasher.Hash(employee.HashedPassword);
            // if (employee.EmployeeRole == null)
            // {
            //     employee.EmployeeRole = EmployeeRole.None;
            // }
            _context.Employees.Add(employee);

            await _context.SaveChangesAsync();
        }

        public void UpdateEmployeeEmail(long id, string email)
        {
            var employeeToUpdate = GetEmployeeById(id).Result;
            employeeToUpdate.Email = email;
            _context.SaveChanges();

        }

        public async Task DeleteEmployee(long id)
        {
            var employeeToDelete = GetEmployeeById(id).Result;
            _context.Employees.Remove(employeeToDelete);
            await _context.SaveChangesAsync();
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
    }
}

