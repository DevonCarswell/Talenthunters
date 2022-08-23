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
    public class DivisionController : ControllerBase
    {
        private readonly IDivisionService _divisionService;

        public DivisionController(IDivisionService divisionService)
        {
            _divisionService = divisionService;
        }

        [HttpPost("add-division")]
        public async Task AddDivision([FromBody] Division emp)
        {
            await _divisionService.AddDivision(emp);
        }

        [HttpGet("get-division/{id}")]
        public async Task<Division> GetDivisionById(long id)
        {
            return await _divisionService.GetDivisionById(id);
        }

        [HttpGet]
        [Route("get-divisions")]
        public async Task<List<Division>> GetAllDivisions()
        {
            return await _divisionService.GetAllDivisions();
        }

        [HttpGet]
        [Route("get-employees-by-division")]
        public async Task<List<Employee>> GetEmployeesByDivision(long id)
        {
            return await _divisionService.GetEmployeesByDivision(id);
        }
        

        [HttpDelete("delete-division/{id}")]
        public async Task DeleteDivision(long id)
        {
           await _divisionService.DeleteDivision(id);
        }
    };

}