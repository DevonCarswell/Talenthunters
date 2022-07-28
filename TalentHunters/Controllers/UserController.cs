using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using TalentHunters.Memory;
using TalentHunters.Models;
using TalentHunters.Utilities;

namespace TalentHunters.Controllers
{
    [ApiController]
    public class UserController : Controller
    {
        private RegisteredUsers _registeredUsers;

        public UserController()
        {
            _registeredUsers = RegisteredUsers.Instance();
            //_registeredUsers.RegisterUser(new User("béla@béla.com","fe3fwerfpewrkfweopfkerpfkoewrferpko"));
        }


        [HttpPost]
        [Route("api/registration")]
        public void Registration([FromBody] RegistrationData regData)
        {

            if (regData.PasswordToReg != regData.ConfirmPasswordToReg)
            {
                throw new HttpRequestException("Passwords doesn't match");
            }



            var hashPassword = SecurePasswordHasher.Hash(regData.PasswordToReg);
            _registeredUsers.RegisterUser(new User(regData.EmailToReg,hashPassword));

        }

        [HttpGet]
        [Route("api/get-users")]
        public List<User> GetAllUsers()
        {
           return _registeredUsers.GetAllUsers();
        }

    }
}