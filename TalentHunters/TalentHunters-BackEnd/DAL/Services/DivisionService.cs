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

        public async Task<Division?> GetDivisionById(long id)
        {
            var divisions = await GetAllDivisions();
            var division = divisions.FirstOrDefault(div => div.Id == id);
            if (division is not null)
            {
                return division;
            }

            return null;
        }

        public async Task<List<Division>> GetAllDivisions()
        {
            var divisions = await _context.Divisions.ToListAsync();
            return divisions;
        }

        public async Task<List<Employee>> GetEmployeesByDivision(long id)
        {
            var employees = await _context.Divisions
                .Where(div => div.Id == id)
                .SelectMany(div => div.Employees).ToListAsync();
            return employees;
        }

        public async Task DeleteDivision(long id)
        {
            var divisionToDelete = await GetDivisionById(id);
            if (divisionToDelete is not null)
            {
                _context.Divisions.Remove(divisionToDelete);
                await _context.SaveChangesAsync();
            }
            
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
    
