using TalentHunters_BackEnd.Models.Entities;
using TalentHunters_BackEnd.Utilities;

namespace TalentHunters_BackEnd.DAL
{
    public class UserService
    {
        private RegisteredUsers _registeredUsers;

        public UserService(RegisteredUsers instance)
        {
            _registeredUsers = instance;
        }

        //    public User GetUserById(Guid id)
        //    {
        //        return _registeredUsers.GetUserById(id);
        //    }

        //    public HashSet<User> GetAllUsers()
        //    {
        //        return _registeredUsers.GetAllUsers();
        //    }

        //    public void AddUser(string name, string password)
        //    {
        //        _registeredUsers.RegisterUser(new User(name, SecurePasswordHasher.Hash(password)));
        //    }

        //    public void UpdateUserEmailById(Guid id, string email)
        //    {
        //        _registeredUsers.UpdateEmail(id, email);
        //    }

        //    public void DeleteUser(Guid id)
        //    {
        //        _registeredUsers.DeleteUser(id);
        //    }
        //}
    }
}
