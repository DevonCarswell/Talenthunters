using TalentHunters_BackEnd.Models;

namespace TalentHunters_BackEnd.DAL
{
    public class RegisteredUsers
    {

        
        private HashSet<User> _users = new HashSet<User>();

        public RegisteredUsers()
        {
            _users.Add(new User("dalma@dalma.com", "gwegwe"));
            _users.Add(new User("zsolt@zsolt.com", "ggewghreh"));
        }

        public void RegisterUser(User user)
        {
            _users.Add(user);
        }

        public HashSet<User> GetAllUsers()
        {
            return _users;
        }


        public User GetUserById(Guid id)
        {
            return _users.FirstOrDefault(user => user.Id == id);
        }
    }
}
