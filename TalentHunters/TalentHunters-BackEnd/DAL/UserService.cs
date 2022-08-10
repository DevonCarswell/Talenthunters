using TalentHunters_BackEnd.Models;
using TalentHunters_BackEnd.Utilities;

namespace TalentHunters_BackEnd.DAL
{
    public class UserService : IManagement
    {
        private RegisteredUsers _registeredUsers;

        public UserService()
        {
            _registeredUsers = RegisteredUsers.Instance();
        }

        public User GetUserById(int id)
        {
            throw new NotImplementedException();
        }

        public HashSet<User> GetAllUsers()
        {
            return _registeredUsers.GetAllUsers();
        }

        public void AddUser(string name, string password)
        {
            _registeredUsers.RegisterUser(new User(name, SecurePasswordHasher.Hash(password)));
        }

        public void UpdateUserById(int id)
        {
            throw new NotImplementedException();
        }

        public void DeleteUser(int id)
        {
            throw new NotImplementedException();
        }
    }
}
