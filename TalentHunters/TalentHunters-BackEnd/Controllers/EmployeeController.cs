using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TalentHunters_BackEnd.Auth;
using TalentHunters_BackEnd.DAL;
using TalentHunters_BackEnd.DAL.Interfaces;
using TalentHunters_BackEnd.Models;
using TalentHunters_BackEnd.Models.Entities;
using TalentHunters_BackEnd.Models.Enums;
using TalentHunters_BackEnd.Utilities;

namespace TalentHunters_BackEnd.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;

        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        [Authorize(Roles = "Admin")]
        [HttpGet]
        [Route("get-employees")]
        public async Task<List<Employee>> GetAllEmployees()
        {
            // Return Task<IQueryable>
            //var employeList = _employeeService.GetAllEmployees();
            //var employees = employeList.Result.Select(emp => new
            //{
            //    emp.Id,
            //    emp.FirstName,
            //    emp.LastName,
            //    emp.Email,
            //    emp.RegistrationDate,
            //    emp.EmployeeRole

            //});
            return await _employeeService.GetAllEmployees();
        }

        [Authorize(Roles = "Admin")]
        [HttpGet("get-employee/{id}")]
        public async Task<Employee> GetEmployeeById(long id)
        {
            return await _employeeService.GetEmployeeById(id);
        }

        [AllowAnonymous]
        [HttpPost("add-employee")]
        public async Task AddEmployee([FromBody] Employee emp)
        {
            await _employeeService.AddEmployee(emp);
        }

        [Authorize(Roles = "Admin")]
        [HttpPut("update-employee-email/{id}")]
        public void UpdateEmployeeEmailById(long id, [FromBody] string email)
        {

            _employeeService.UpdateEmployeeEmail(id, email);

        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("delete-employee/{id}")]
        public async Task DeleteEmployee(long id)
        {
            await _employeeService.DeleteEmployee(id);
        }

        [Authorize(Roles = "Admin")]
        [HttpGet("get-roles")]
        public List<EmployeeRole> GetRoles()
        {
            var roles = Enum.GetValues(typeof(EmployeeRole)).Cast<EmployeeRole>().ToList();
            return roles;
        }

        [AllowAnonymous]
        [HttpGet("get-emails")]
        public Task<List<string>> GetAllEmails()
        {
            return _employeeService.GetAllEmails();
        }

        [AllowAnonymous]
        [HttpGet, HttpPost("login")]
        public ActionResult<IQueryable> AuthenticateAsync([FromBody] AuthenticationData authenticationData)
        {

            var employee = _employeeService.AuthenticateAsync(authenticationData.Email, authenticationData.Password);

            if (employee is not null)
            {
                var dataToSend = new
                {
                    employee.Result.FirstName,
                    employee.Result.LastName,
                    employee.Result.Email,
                    employee.Result.Role
                };

                return Ok(dataToSend);
            }

            return NoContent();



        }
    };

}