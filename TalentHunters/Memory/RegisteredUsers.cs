using TalentHunters.Models;

namespace TalentHunters.Memory
{
    public class RegisteredUsers
    {

        private static RegisteredUsers _instance;
        private List<User> _users = new List<User>();

        private RegisteredUsers()
        {

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
        public List<User> GetAllUsers()
        {
            return _users;
        }
    }
}
