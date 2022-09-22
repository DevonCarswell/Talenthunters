using Microsoft.EntityFrameworkCore;
using TalentHunters_BackEnd.DAL.Interfaces;
using TalentHunters_BackEnd.Models.Entities;
using TalentHunters_BackEnd.Models.Enums;
using TalentHunters_BackEnd.Utilities;
using Division = TalentHunters_BackEnd.Models.Entities.Division;

namespace TalentHunters_BackEnd.DAL.Services
{
    public class DivisionService : IDivisionService
    {
        private readonly TalentHuntersContext _context;

        public DivisionService(TalentHuntersContext context)
        {
            _context = context;
        }


        public async Task AddDivision(Division division)
        {
            _context.Divisions.Add(division);
            await _context.SaveChangesAsync();
        }

        public async Task<Division> GetDivisionById(long id)
        {
            var division = _context.Divisions.FirstAsync(div => div.Id == id);
            return await division;
        }

        public async Task<List<Division>> GetAllDivisions()
        {
            var divisions = _context.Divisions.ToListAsync();
            return await divisions;
        }

        public async Task<List<Employee>> GetEmployeesByDivision(long id)
        {
            var employees = _context.Divisions
                .Where(div => div.Id == id)
                .SelectMany(div => div.Employees).ToListAsync();
            return await employees;
        }

        public async Task DeleteDivision(long id)
        {
            var divisionToDelete = GetDivisionById(id).Result;
            _context.Divisions.Remove(divisionToDelete);
            await _context.SaveChangesAsync();
        }

        public async Task<bool> CheckDivisionIsExist(string name)
        {
            var divisions = await GetAllDivisions();
            if (divisions.Any(div => div.Name == name))
            {
                return true;
            }

            return false;
        }
    }
}
    
