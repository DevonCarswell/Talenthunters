using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TalentHunters_BackEnd.Auth;
using TalentHunters_BackEnd.DAL;
using TalentHunters_BackEnd.DAL.Interfaces;
using TalentHunters_BackEnd.Models;
using TalentHunters_BackEnd.Models.Entities;
using TalentHunters_BackEnd.Models.Enums;
using TalentHunters_BackEnd.Models.HelperEntities;
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
        public async Task<ActionResult<List<Employee>>> GetAllEmployees()
        {
            var employees = await _employeeService.GetAllEmployees();

            if (employees.Count > 0)
            {
                return Ok(employees);
            }

            return NoContent();
        }

        [Authorize(Roles = "Admin")]
        [HttpGet("get-employee/{id}")]
        public async Task<ActionResult<Employee>> GetEmployeeById(long id)
        {
            var employee = await _employeeService.GetEmployeeById(id);
            if (employee is not null)
            {
                return Ok(employee);
            }

            return NoContent();
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
            return  _employeeService.GetAllEmails();
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<ActionResult<LoggedUser>> AuthenticateAsync([FromBody] AuthenticationData authenticationData)
        {

            var employee = await _employeeService.AuthenticateAsync(authenticationData.Email, authenticationData.Password);

            if (employee != null)
            {
                var dataToSend = new LoggedUser()
                {
                    FirstName = employee.FirstName,
                    LastName = employee.LastName,
                    Email = employee.Email,
                    Role = employee.Role
                };

                return Ok(dataToSend);
            }

            return NoContent();



        }
    };

}