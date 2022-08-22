namespace TalentHunters_BackEnd.Models.Entities
{
    public class RegisteredUsers
    {


        private HashSet<Employee> _users = new HashSet<Employee>();

        public RegisteredUsers()
        {
            //_users.Add(new User("dalma@dalma.com", "gwegwe"));
            //_users.Add(new User("zsolt@zsolt.com", "ggewghreh"));
        }

        //public void RegisterUser(User user)
        //{
        //    _users.Add(user);
        //}

        //public HashSet<User> GetAllUsers()
        //{
        //    return _users;
        //}


        //public User GetUserById(Guid id)
        //{
        //    return _users.FirstOrDefault(user => user.Id == id);
        //}

        //public void UpdateEmail(Guid id, string email)
        //{
        //    var user = _users.FirstOrDefault(user => user.Id == id);
        //    user.UpdateEmail(email);
        //}

        //public void DeleteUser(Guid id)
        //{
        //    _users.Remove(_users.FirstOrDefault(user => user.Id == id));
        //}

    }
}
