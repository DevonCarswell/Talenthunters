using System.Net;
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
        public async Task<ActionResult> AddEmployee([FromBody] Employee emp)
        {
            var isValidEmail = await _employeeService.CheckEmailExistInDatabase(emp.Email);
            if (isValidEmail)
            {
                return BadRequest();
            }
            await _employeeService.AddEmployee(emp);
            return Ok(emp);
        }

        [Authorize(Roles = "Admin")]
        [HttpPut("update-employee-email/{id}")]
        public async Task<ActionResult> UpdateEmployeeEmailById(long id, [FromBody] string email)
        {
            var employee = await _employeeService.GetEmployeeById(id);
            if (employee is not null)
            {
                await _employeeService.UpdateEmployeeEmail(id, email);
                return Ok();
            }

            return NotFound();


        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("delete-employee/{id}")]
        public async Task<ActionResult> DeleteEmployee(long id)
        {
            var employee = await _employeeService.GetEmployeeById(id);
            if (employee is not null)
            {
                await _employeeService.DeleteEmployee(id);
                return Ok();
            }

            return NoContent();

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
        public async Task<ActionResult<List<string>>> GetAllEmails()
        {
            var emails = await _employeeService.GetAllEmails();
            if (emails.Count > 0)
            {
                return Ok(emails);
            }

            return NoContent();
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