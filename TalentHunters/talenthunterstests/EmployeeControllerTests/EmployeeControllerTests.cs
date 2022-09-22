

using TalentHunters_BackEnd.Controllers;
using TalentHunters_BackEnd.DAL.Interfaces;
using TalentHunters_BackEnd.Models.Entities;
using TalentHunters_BackEnd.Models.Enums;
using TalentHunters_BackEnd.Utilities;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using NSubstitute.ExceptionExtensions;
using NSubstitute.ReturnsExtensions;
using TalentHunters_BackEnd.Models.HelperEntities;

namespace talenthunterstests.EmployeeControllerTest
{
    [TestFixture]
    public class EmployeeControllerTests
    {
        private IEmployeeService _mockEmployeeService;
        private EmployeeController _employeeController;
        private Employee _existEmployee;
        private AuthenticationData _validAuthenticationData;
        private AuthenticationData _invalidAuthenticationData;
        private List<Employee> _emptyEmployeesList;
        private List<Employee> _validEmployeesList;


        [SetUp]
        public void Setup()
        {
            _mockEmployeeService = Substitute.For<IEmployeeService>();
            _employeeController = new EmployeeController(_mockEmployeeService);
            _existEmployee = new Employee()
            {
                Email = "zsolt.kasza@talenthunters.com",
                FirstName = "Zsolt",
                LastName = "Kasza",
                EmployeeRole = EmployeeRole.BackEndDeveloper,
                HashedPassword = SecurePasswordHasher.Hash("R5DGnJvV"),
                Role = "Admin"
            };
            _emptyEmployeesList = new List<Employee>();
            _validEmployeesList = new List<Employee>() {_existEmployee};
            _validAuthenticationData = new AuthenticationData() { Email = _existEmployee.Email, Password = "R5DGnJvV" };
            _invalidAuthenticationData = new AuthenticationData() { Email = _existEmployee.Email, Password = "invalidPassword" };
        }

        [Test]
        public void LoginWithValidUserDataReturnsOkObjectResult()
        {
            
            _mockEmployeeService.AuthenticateAsync(_validAuthenticationData.Email, _validAuthenticationData.Password).Returns(_existEmployee);
            
            var result = _employeeController.AuthenticateAsync(_validAuthenticationData).Result.Result;

     
            Assert.IsInstanceOf<OkObjectResult>(result);
        }

        [Test]
        public void LoginWithInvalidValidUserDataReturnsNoContentResult()
        {

            _mockEmployeeService.AuthenticateAsync(_validAuthenticationData.Email, _validAuthenticationData.Password).Returns(_existEmployee);


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

            _mockEmployeeService.GetEmployeeById(_existEmployee.Id).Returns(_existEmployee);

            var result = _employeeController.GetEmployeeById(_existEmployee.Id).Result.Result;

            Assert.IsInstanceOf<OkObjectResult>(result);
        }

        [Test]
        public void GetEmployeeByIdWithInvalidIdReturnsNoContentResult()
        {
            _mockEmployeeService.GetAllEmployees().Returns(new List<Employee>());
            
            var result = _employeeController.GetEmployeeById(5).Result.Result;

            Assert.IsInstanceOf<NoContentResult>(result);
        }


        [Test]
        public void RegisterUserWhichDoesnotExistReturnsOkObjectResult()
        {
            var newEmployee = new Employee()
            {
                Email = "dalma.csernok@talenthunters.com",
                FirstName = "Dalma",
                LastName = "Csernok",
                EmployeeRole = EmployeeRole.FrontEndDeveloper,
                HashedPassword = SecurePasswordHasher.Hash("7KHnP4yZ"),
                Role = "Admin"
            };

            _mockEmployeeService.CheckEmailExistInDatabase(newEmployee.Email).Returns(false);

            var result = _employeeController.AddEmployee(newEmployee).Result;

            Assert.IsInstanceOf<OkObjectResult>(result);
        }

        [Test]
        public void RegisterUserWhichExistReturnsBadRequestResult()
        {
            _mockEmployeeService.CheckEmailExistInDatabase(_existEmployee.Email).Returns(true);

            var result = _employeeController.AddEmployee(_existEmployee).Result;

            Assert.IsInstanceOf<BadRequestResult>(result);
        }


        [Test]
        public void UpdateEmailAddressOnExistingUserReturnsOkResult()
        {
            _mockEmployeeService.GetEmployeeById(1).Returns(_existEmployee);

            var result = _employeeController.UpdateEmployeeEmailById(1, "alma@alma.com").Result;
            

            Assert.IsInstanceOf<OkResult>(result);
        }


        [Test]
        public void UpdateEmailAddressNOnExistingUserReturnsNotFoundResult()
        {
            _mockEmployeeService.GetEmployeeById(1).ReturnsNull();

            var result = _employeeController.UpdateEmployeeEmailById(1, "alma@alma.com").Result;


            Assert.IsInstanceOf<NotFoundResult>(result);
        }



        [Test]
        public void DeleteExistEmployeeReturnsOkResult()
        {
            _mockEmployeeService.GetEmployeeById(1).Returns(_existEmployee);

            var result = _employeeController.DeleteEmployee(1).Result;


            Assert.IsInstanceOf<OkResult>(result);
        }


        [Test]
        public void DeleteNonExistEmployeeReturnsNoContentResult()
        {
            _mockEmployeeService.GetEmployeeById(1).ReturnsNull();

            var result = _employeeController.DeleteEmployee(1).Result;


            Assert.IsInstanceOf<NoContentResult>(result);
        }


        [Test]
        public void GetAllEmailsWithContentReturnsOkObjectResult()
        {
            var validEmails = new List<string>() {_existEmployee.Email};
            _mockEmployeeService.GetAllEmails().Returns(validEmails);

            var result = _employeeController.GetAllEmails().Result.Result;

            Assert.IsInstanceOf<OkObjectResult>(result);
        }


        [Test]
        public void GetAllEmailsWithoutContentReturnsNoContentResult()
        {
            var invalidEmails = new List<string>();
            _mockEmployeeService.GetAllEmails().Returns(invalidEmails);

            var result = _employeeController.GetAllEmails().Result.Result;

            Assert.IsInstanceOf<NoContentResult>(result);
        }
    }
}
