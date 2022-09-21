

using TalentHunters_BackEnd.Controllers;
using TalentHunters_BackEnd.DAL.Interfaces;
using TalentHunters_BackEnd.Models.Entities;
using TalentHunters_BackEnd.Models.Enums;
using TalentHunters_BackEnd.Utilities;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using TalentHunters_BackEnd.Models.HelperEntities;

namespace talenthunterstests.EmployeeControllerTest
{
    [TestFixture]
    public class EmployeeControllerTests
    {
        private IEmployeeService _mockEmployeeService;
        private EmployeeController _employeeController;
        private Employee _employee;


        [SetUp]
        public void Setup()
        {
            _mockEmployeeService = Substitute.For<IEmployeeService>();
            _employeeController = new EmployeeController(_mockEmployeeService);
            _employee = new Employee()
            {
                Email = "zsolt.kasza@talenthunters.com",
                FirstName = "Zsolt",
                LastName = "Kasza",
                EmployeeRole = EmployeeRole.BackEndDeveloper,
                HashedPassword = SecurePasswordHasher.Hash("R5DGnJvV"),
                Role = "Admin"
            };
        }

        [Test]
        public void LoginWithValidUserDataReturnsOkObjectResult()
        {
            
            _mockEmployeeService.AuthenticateAsync(_employee.Email, "R5DGnJvV").Returns(_employee);

            var validAuthenticationData = new AuthenticationData() {Email = _employee.Email, Password = "R5DGnJvV" };
            
            var result = _employeeController.AuthenticateAsync(validAuthenticationData).Result.Result;

     
            Assert.IsInstanceOf<OkObjectResult>(result);
        }

        [Test]
        public void LoginWithInvalidValidUserDataReturnsNoContentResult()
        {
            
            _mockEmployeeService.AuthenticateAsync(_employee.Email, "R5DGnJvV").Returns(_employee);

            var authenticationData = new AuthenticationData() { Email = _employee.Email, Password = "invalidPassword" };

            var result = _employeeController.AuthenticateAsync(authenticationData).Result.Result;


            Assert.IsInstanceOf<NoContentResult>(result);
        }

        [Test]
        public void GetAllEmployeeListReturnsOkObjectResult()
        {
            var employees = new List<Employee>() {_employee};
            _mockEmployeeService.GetAllEmployees().Returns(employees);

            var result = _employeeController.GetAllEmployees().Result.Result;

            Assert.IsInstanceOf<OkObjectResult>(result);
        }

        [Test]
        public void GetAllEmployeeReturnsNoContentResult()
        {
            var employees = new List<Employee>();
            _mockEmployeeService.GetAllEmployees().Returns(employees);

            var result = _employeeController.GetAllEmployees().Result.Result;

            Assert.IsInstanceOf<NoContentResult>(result);
        }
    }
}
