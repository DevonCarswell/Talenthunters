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


        public Task AddDivision(Division division)
        {
            throw new NotImplementedException();
        }

        public Task<Division> GetDivisionById(long id)
        {
            throw new NotImplementedException();
        }

        public Task<List<Division>> GetAllDivisions()
        {
            throw new NotImplementedException();
        }

        public Task<List<Employee>> GetEmployeesByDivision(long id)
        {
            throw new NotImplementedException();
        }

        public Task DeleteDivision(long id)
        {
            throw new NotImplementedException();
        }
    }
}
    
