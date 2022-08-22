using TalentHunters_BackEnd.Models.Entities;

namespace TalentHunters_BackEnd.DAL.Interfaces
{
    public interface IEmployeeService
    {
        Task<Employee> GetEmployeeById(long id);
        Task<List<Employee>> GetAllEmployees();
        Task AddEmployee(Employee employee);

        //void UpdateEmployeeEmailById(Guid id, string email);
        //void DeleteEmployee(Guid id);
        void UpdateEmployeeEmail(long id, string email);
        Task DeleteEmployee(long id);
    }
}
