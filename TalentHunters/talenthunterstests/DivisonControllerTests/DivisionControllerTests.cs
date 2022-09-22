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



        [SetUp]
        public void Setup()
        {
            _mocDivisionService = Substitute.For<IDivisionService>();
            _divisionController = new DivisionController(_mocDivisionService);
            _testDivision  = new Division() { Employees = new(), Name = "Test" };
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
    }
}
