using Microsoft.AspNetCore.Mvc;
using TalentHunters_BackEnd.DAL;
using TalentHunters_BackEnd.DAL.Interfaces;
using TalentHunters_BackEnd.Models;
using TalentHunters_BackEnd.Models.Entities;
using TalentHunters_BackEnd.Utilities;
using Microsoft.AspNetCore.Authorization;

namespace TalentHunters_BackEnd.Controllers
{
    [Authorize(Roles = "Admin")]
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
        public async Task<ActionResult> AddDivision([FromBody] Division division)
        {
            var isDivisionExist = await _divisionService.CheckDivisionIsExist(division.Name);
            if (isDivisionExist)
            {
                return BadRequest();
            }
            await _divisionService.AddDivision(division);
            return Ok();
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
        [Route("get-employees-by-division/{id}")]
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