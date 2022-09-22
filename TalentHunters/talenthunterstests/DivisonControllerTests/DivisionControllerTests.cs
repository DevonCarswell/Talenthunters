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
       


        [SetUp]
        public void Setup()
        {
            _mocDivisionService = Substitute.For<IDivisionService>();
            _divisionController = new DivisionController(_mocDivisionService);
        }

        [Test]
        public void AddNotExistDivisonReturnsOkObjectResult()
        {
            var newDivison = new Division() {Employees = new(), Name = "BrandNewDivison"};

            _mocDivisionService.CheckDivisionIsExist(newDivison.Name).Returns(false);

            var result = _divisionController.AddDivision(newDivison).Result;
            
            Assert.IsInstanceOf<OkResult>(result);
        }
    }
}
