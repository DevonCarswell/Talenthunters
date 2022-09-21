

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
        private AuthenticationData _validAuthenticationData;
        private AuthenticationData _invalidAuthenticationData;
        private List<Employee> _emptyEmployeesList;
        private List<Employee> _validEmployeesList;


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
            _emptyEmployeesList = new List<Employee>();
            _validEmployeesList = new List<Employee>() {_employee};
            _validAuthenticationData = new AuthenticationData() { Email = _employee.Email, Password = "R5DGnJvV" };
            _invalidAuthenticationData = new AuthenticationData() { Email = _employee.Email, Password = "invalidPassword" };
        }

        [Test]
        public void LoginWithValidUserDataReturnsOkObjectResult()
        {
            
            _mockEmployeeService.AuthenticateAsync(_validAuthenticationData.Email, _validAuthenticationData.Password).Returns(_employee);
            
            var result = _employeeController.AuthenticateAsync(_validAuthenticationData).Result.Result;

     
            Assert.IsInstanceOf<OkObjectResult>(result);
        }

        [Test]
        public void LoginWithInvalidValidUserDataReturnsNoContentResult()
        {

            _mockEmployeeService.AuthenticateAsync(_validAuthenticationData.Email, _validAuthenticationData.Password).Returns(_employee);


            var result = _employeeController.AuthenticateAsync(_invalidAuthenticationData).Result.Result;


            Assert.IsInstanceOf<NoContentResult>(result);
        }

        [Test]
        public void GetAllEmployeeListReturnsOkObjectResult()
        {
            _mockEmployeeService.GetAllEmployees().Returns(_validEmployeesList);

            var result = _employeeController.GetAllEmployees().Result.Result;

            Assert.IsInstanceOf<OkObjectResult>(result);
        }

        [Test]
        public void GetAllEmployeeReturnsNoContentResult()
        {
           
            _mockEmployeeService.GetAllEmployees().Returns(_emptyEmployeesList);

            var result = _employeeController.GetAllEmployees().Result.Result;

            Assert.IsInstanceOf<NoContentResult>(result);
        }


        [Test]
        public void GetEmployeeByIdWithValidIdReturnsOkObjectResult()
        {

            _mockEmployeeService.GetEmployeeById(_employee.Id).Returns(_employee);

            var result = _employeeController.GetEmployeeById(_employee.Id).Result.Result;

            Assert.IsInstanceOf<OkObjectResult>(result);
        }

        [Test]
        public void GetEmployeeByIdWithInvalidIdReturnsNoContentResult()
        {
            _mockEmployeeService.GetAllEmployees().Returns(new List<Employee>());
            
            var result = _employeeController.GetEmployeeById(5).Result.Result;

            Assert.IsInstanceOf<NoContentResult>(result);
        }
    }
}
