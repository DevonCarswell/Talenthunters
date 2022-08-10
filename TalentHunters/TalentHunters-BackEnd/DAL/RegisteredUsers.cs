using TalentHunters_BackEnd.Models;

namespace TalentHunters_BackEnd.DAL
{
    public class RegisteredUsers
    {

        private static RegisteredUsers _instance;
        private HashSet<User> _users = new HashSet<User>();

        private RegisteredUsers()
        {
            _users.Add(new User("dalma@dalma.com", "gwegwe"));
            _users.Add(new User("zsolt@zsolt.com", "ggewghreh"));
        }

        public static RegisteredUsers Instance()
        {
            if (_instance == null)
            {
                _instance = new RegisteredUsers();
            }

            return _instance;
        }

        public void RegisterUser(User user)
        {
            _users.Add(user);
        }

        public HashSet<User> GetAllUsers()
        {
            return _users;
        }
    }
}
