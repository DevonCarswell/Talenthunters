using TalentHunters_BackEnd.Models;

namespace TalentHunters_BackEnd.DAL
{
    public interface IManagement
    {
        User GetUserById(Guid id);
        HashSet<User> GetAllUsers();
        void AddUser(string name, string password);

        void UpdateUserEmailById(Guid id, string email);
        void DeleteUser(Guid id);
    }
}
