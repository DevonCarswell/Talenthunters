using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NSubstitute.ReturnsExtensions;
using TalentHunters_BackEnd.Controllers;
using TalentHunters_BackEnd.DAL.Interfaces;
using TalentHunters_BackEnd.Models.Entities;
using TalentHunters_BackEnd.Models.Enums;
using TalentHunters_BackEnd.Utilities;

namespace talenthunterstests.DivisonControllerTests
{
    public class DivisionControllerTests
    {
        private IDivisionService _mocDivisionService;
        private DivisionController _divisionController;
        private Division _testDivision; 
        private List<Division> _testDivisionList; 



        [SetUp]
        public void Setup()
        {
            _mocDivisionService = Substitute.For<IDivisionService>();
            _divisionController = new DivisionController(_mocDivisionService);
            _testDivision  = new Division() { Employees = new(){ new Employee()
            {
                Email = "zsolt.kasza@talenthunters.com",
                FirstName = "Zsolt",
                LastName = "Kasza",
                EmployeeRole = EmployeeRole.BackEndDeveloper,
                HashedPassword = SecurePasswordHasher.Hash("R5DGnJvV"),
                Role = "Admin"
            }}, Name = "Test" };
            _testDivisionList = new List<Division>() {_testDivision};
        }

        [Test]
        public void AddNotExistDivisonReturnsOkObjectResult()
        {
            _mocDivisionService.CheckDivisionIsExist(_testDivision.Name).Returns(false);

            var result = _divisionController.AddDivision(_testDivision).Result;
            
            Assert.IsInstanceOf<OkResult>(result);
        }

        [Test]
        public void AddExistDivisonReturnsBadRequestResult()
        {
            _mocDivisionService.CheckDivisionIsExist(_testDivision.Name).Returns(true);

            var result = _divisionController.AddDivision(_testDivision).Result;

            Assert.IsInstanceOf<BadRequestResult>(result);
        }

        [Test]
        public void GetDivisionByIdWithValidIdReturnsOkObjectResult()
        {

            _mocDivisionService.GetDivisionById(_testDivision.Id).Returns(_testDivision);

            var result = _divisionController.GetDivisionById(_testDivision.Id).Result.Result;
            
            Assert.IsInstanceOf<OkObjectResult>(result);
        }

        [Test]
        public void GetDivisionByIdWithInValidIdReturnsNoContentResult()
        {

            _mocDivisionService.GetDivisionById(_testDivision.Id).ReturnsNull();

            var result = _divisionController.GetDivisionById(_testDivision.Id).Result.Result;

            Assert.IsInstanceOf<NotFoundResult>(result);
        }


        [Test]
        public void GetAllDivisionsReturnsOkObjectResult()
        {
            _mocDivisionService.GetAllDivisions().Returns(_testDivisionList);

            var result = _divisionController.GetAllDivisions().Result.Result;
            

            Assert.IsInstanceOf<OkObjectResult>(result);
        }


        [Test]
        public void GetAllDivisionsReturnsNoContentResult()
        {
            _mocDivisionService.GetAllDivisions().Returns(new List<Division>());

            var result = _divisionController.GetAllDivisions().Result.Result;


            Assert.IsInstanceOf<NoContentResult>(result);
        }


        [Test]
        public void GetAllEmployeesByDivisionIdWithEmployeesReturnsOkObjectResult()
        {
            _mocDivisionService.GetEmployeesByDivision(_testDivision.Id).Returns(_testDivision.Employees.ToList());

            var result = _divisionController.GetEmployeesByDivision(_testDivision.Id).Result.Result;


            Assert.IsInstanceOf<OkObjectResult>(result);
        }


        [Test]
        public void GetAllEmployeesByDivisionIdWithoutEmployeesReturnsOkObjectResult()
        {
            _mocDivisionService.GetEmployeesByDivision(1).Returns(new List<Employee>());

            var result = _divisionController.GetEmployeesByDivision(1).Result.Result;


            Assert.IsInstanceOf<NoContentResult>(result);
        }
    }
}
