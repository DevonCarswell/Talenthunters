using Microsoft.AspNetCore.Mvc;
using TalentHunters_BackEnd.DAL;
using TalentHunters_BackEnd.Models;

namespace TalentHunters_BackEnd.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ManagerController : ControllerBase
    {
        private readonly IManagement _management;

        public ManagerController(IManagement management)
        {
            _management = management;
        }

        [HttpGet]
        [Route("get-users")]
        public HashSet<User> GetAllUsers()
        {
            return _management.GetAllUsers();
        }

        [HttpGet("get-user/{id}")]
        public User GetUserById(Guid id)
        {
            return _management.GetUserById(id);
        }

        [HttpPost("add-user")]
        public void AddUser([FromBody] RegistrationData regData)
        {
            _management.AddUser(regData.EmailToReg, regData.PasswordToReg);
        }

        [HttpPut("update-user-email/{id}")]
        public void UpdateUserEmailById(Guid id, [FromBody] string email )
        {

            _management.UpdateUserEmailById(id, email);

        }

        [HttpDelete("delete-user/{id}")]
        public void DeleteUser(Guid id)
        {
            _management.DeleteUser(id);
        }
    };

}