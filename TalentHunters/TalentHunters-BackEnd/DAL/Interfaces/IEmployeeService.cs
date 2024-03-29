﻿using Microsoft.AspNetCore.Mvc;
using TalentHunters_BackEnd.Models.Entities;

namespace TalentHunters_BackEnd.DAL.Interfaces
{
    public interface IEmployeeService
    {
        Task<Employee> GetEmployeeById(long id);
        Task<List<Employee>> GetAllEmployees();
        Task AddEmployee(Employee employee);
        Task UpdateEmployeeEmail(long id, string email);
        Task DeleteEmployee(long id);

        Task<List<Employee>> GetEmployeesWithoutDivision();

        Task<List<string>> GetAllEmails();

        Task<Employee>? AuthenticateAsync(string email, string password);

        Task<bool> CheckEmailExistInDatabase(string email);
    }
}
