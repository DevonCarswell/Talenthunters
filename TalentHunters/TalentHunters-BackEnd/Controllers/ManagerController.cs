using Microsoft.AspNetCore.Mvc;
using TalentHunters_BackEnd.DAL;
using TalentHunters_BackEnd.DAL.Interfaces;
using TalentHunters_BackEnd.Models;
using TalentHunters_BackEnd.Models.Entities;
using TalentHunters_BackEnd.Utilities;

namespace TalentHunters_BackEnd.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ManagerController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;

        public ManagerController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        [HttpGet]
        [Route("get-employees")]
        public async Task<List<Employee>> GetAllEmployees()
        {
            return await _employeeService.GetAllEmployees();
        }

        [HttpGet("get-employee/{id}")]
        public async Task<Employee> GetEmployeeById(long id)
        {
            return await _employeeService.GetEmployeeById(id);
        }

        [HttpPost("add-employee")]
        public async Task AddEmployee([FromBody] Employee emp)
        {
            await _employeeService.AddEmployee(emp);
        }

        [HttpPut("update-employee-email/{id}")]
        public void UpdateEmployeeEmailById(long id, [FromBody] string email)
        {

            _employeeService.UpdateEmployeeEmail(id, email);

        }

        [HttpDelete("delete-employee/{id}")]
        public async Task DeleteEmployee(long id)
        {
           await _employeeService.DeleteEmployee(id);
        }
    };

}