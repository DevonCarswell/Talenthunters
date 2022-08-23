using TalentHunters_BackEnd.Models.Entities;
using TalentHunters_BackEnd.Models.Enums;
using TalentHunters_BackEnd.Utilities;

namespace TalentHunters_BackEnd.DAL
{
    public class DbInitializer
    {

        public static void Initialize(TalentHuntersContext context)
        {
            context.Database.EnsureCreated();

            if (context.Employees.Any() || context.Divisions.Any())
            {
                return;
            }

            var user1 = new Employee()
            {
                Email = "zsolt@zsolt.hu",
                FirstName = "Zsolt",
                LastName = "Kasza",
                EmployeeRole = EmployeeRole.BackEndDeveloper,
                HashedPassword = SecurePasswordHasher.Hash("1234")
            };
            var user2 = new Employee()
            {
                Email = "dalma@dalma.hu",
                FirstName = "Dalma",
                LastName = "Csernok",
                EmployeeRole = EmployeeRole.FrontEndDeveloper,
                HashedPassword = SecurePasswordHasher.Hash("4567")
            };

            // context.Employees.AddRange(new List<Employee>{user2,user1});
            var division = new Division()
            {
                Name = "Front End Developers",
                Manager = user2,
            };

            var division2 = new Division()
            {
                Name = "Back End Developers",
                Manager = user1
            };

            var division3 = new Division()
            {
                Name = "Manual Testers",
                Manager = new Employee()
                {
                    Email = "viktor@viktor.com",
                    FirstName = "Viktor",
                    LastName = "Olló",
                    EmployeeRole = EmployeeRole.ManualTester,
                    HashedPassword = SecurePasswordHasher.Hash("jános")
                },
                Employees = new HashSet<Employee>()
                {
                    new Employee()
                    {
                        Email = "alma@alma.com",
                        FirstName = "Alma",
                        LastName = "Banán",
                        EmployeeRole = EmployeeRole.ManualTester,
                        HashedPassword = SecurePasswordHasher.Hash("jglmindg")
                    },
                    new Employee()
                    {
                        Email = "banán@banán.com",
                        FirstName = "Banán",
                        LastName = "Bálint",
                        EmployeeRole = EmployeeRole.ManualTester,
                        HashedPassword = SecurePasswordHasher.Hash("aaa14578")
                    },
                }
            };

            context.Divisions.AddRange(new List<Division> {division, division2, division3});
            context.SaveChanges();
        }
    }
}


