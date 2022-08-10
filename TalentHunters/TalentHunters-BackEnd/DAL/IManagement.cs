using TalentHunters_BackEnd.Models;

namespace TalentHunters_BackEnd.DAL
{
    public interface IManagement
    {
        User GetUserById(int id);
        HashSet<User> GetAllUsers();
        void AddUser(string name, string password);

        void UpdateUserById(int id);
        void DeleteUser(int id);
    }
}
