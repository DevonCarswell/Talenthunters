using TalentHunters_BackEnd.Models.Entities;

namespace TalentHunters_BackEnd.DAL.Interfaces;

public interface IDivisionService
{
    Task AddDivision(Division division);
    Task<Division> GetDivisionById(long id);
    Task<List<Division>> GetAllDivisions();

    Task<List<Employee>> GetEmployeesByDivision(long id);

    Task DeleteDivision(long id);

    Task<bool> CheckDivisionIsExist(string name);
}