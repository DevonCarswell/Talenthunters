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
        public async Task<ActionResult<Division>> GetDivisionById(long id)
        {
            var division = await _divisionService.GetDivisionById(id);
            if (division is not null)
            {
                return Ok(division);
            }

            return NotFound();
        }

        [HttpGet]
        [Route("get-divisions")]
        public async Task<ActionResult<List<Division>>> GetAllDivisions()
        {
            var divisions = await _divisionService.GetAllDivisions();
            if (divisions.Count > 0)
            {
                return Ok(divisions);
            }

            return NoContent();
        }

        [HttpGet]
        [Route("get-employees-by-division/{id}")]
        public async Task<ActionResult<List<Employee>>> GetEmployeesByDivision(long id)
        {
            var employees = await _divisionService.GetEmployeesByDivision(id);
            if (employees.Count > 0)
            {
                return Ok(employees);
            }

            return NoContent();
        }
        

        [HttpDelete("delete-division/{id}")]
        public async Task DeleteDivision(long id)
        {
           await _divisionService.DeleteDivision(id);
        }
    };

}