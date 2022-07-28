using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using TalentHunters.Memory;
using TalentHunters.Models;
using TalentHunters.Utilities;

namespace TalentHunters.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            return View();
        }

        public IActionResult Contacts()
        {
            return View();
        }

        public IActionResult Registration()
        {
            //var hashedPassword = SecurePasswordHasher.Hash(password);
            //var newUser = new User(email, hashedPassword);
            //RegisteredUsers.Instance().RegisterUser(newUser);
            return View();
        }
        

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}