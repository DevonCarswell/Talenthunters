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
        [Route("/get-users")]
        public HashSet<User> GetAllUsers()
        {
            return _management.GetAllUsers();
        }
    };

}