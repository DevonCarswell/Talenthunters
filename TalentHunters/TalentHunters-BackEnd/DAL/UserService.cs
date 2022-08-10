﻿using TalentHunters_BackEnd.Models;
using TalentHunters_BackEnd.Utilities;

namespace TalentHunters_BackEnd.DAL
{
    public class UserService : IManagement
    {
        private RegisteredUsers _registeredUsers;

        public UserService(RegisteredUsers instance)
        {
            _registeredUsers = instance;
        }

        public User GetUserById(Guid id)
        {
            return _registeredUsers.GetUserById(id);
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
