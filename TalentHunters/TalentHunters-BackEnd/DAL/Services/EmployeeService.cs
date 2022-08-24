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
        

        public async Task<Employee> GetEmployeeById(long id)
        {
            var employee =  _context.Employees.FirstAsync(u => u.Id == id);
            return await employee;
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
    }
}
