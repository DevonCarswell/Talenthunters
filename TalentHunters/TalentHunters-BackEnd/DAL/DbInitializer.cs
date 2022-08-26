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
                Email = "zsolt.kasza@talenthunters.com",
                FirstName = "Zsolt",
                LastName = "Kasza",
                EmployeeRole = EmployeeRole.BackEndDeveloper,
                HashedPassword = SecurePasswordHasher.Hash("R5DGnJvV")
            };
            var user2 = new Employee()
            {
                Email = "dalma.csernok@talenthunters.com",
                FirstName = "Dalma",
                LastName = "Csernok",
                EmployeeRole = EmployeeRole.FrontEndDeveloper,
                HashedPassword = SecurePasswordHasher.Hash("7KHnP4yZ")
            };

            // context.Employees.AddRange(new List<Employee>{user2,user1});
            var division = new Division()
            {
                Name = "Front End Developers",
                Manager = user2,
                Employees = new HashSet<Employee>()
                {
                    new Employee()
                    {
                        Email = "bela.ribizli@talenthunters.com",
                        FirstName = "Ribizli",
                        LastName = "Béla",
                        EmployeeRole = EmployeeRole.FrontEndDeveloper,
                        HashedPassword = SecurePasswordHasher.Hash("63mu7tHZ")
                    },
                    new Employee()
                    {
                        Email = "krisztina.korte@talenthunters.com",
                        FirstName = "Körte",
                        LastName = "Krisztina",
                        EmployeeRole = EmployeeRole.FrontEndDeveloper,
                        HashedPassword = SecurePasswordHasher.Hash("Lczty801")
                    },
                    
                }
            };

            var division2 = new Division()
            {
                Name = "Back End Developers",
                Manager = user1,
                //Employees = new HashSet<Employee>()
                //{
                //new Employee()
                //{
                //Email = "kazmer.kiwi@talenthunters.com",
                //FirstName = "Kiwi",
                //LastName = "Kázmér",
                //EmployeeRole = EmployeeRole.BackEndDeveloper,
                //HashedPassword = SecurePasswordHasher.Hash("mFKWtb9Y")
            };
        


            

            var division3 = new Division()
            {
                Name = "Manual Testers",
                Manager = new Employee()
                {
                    Email = "viktor.ollo@talenthunters.com",
                    FirstName = "Viktor",
                    LastName = "Olló",
                    EmployeeRole = EmployeeRole.ManualTester,
                    HashedPassword = SecurePasswordHasher.Hash("VTEp8Edi")
                },
                Employees = new HashSet<Employee>()
                {
                    new Employee()
                    {
                        Email = "alma.peter@talenthunters.com",
                        FirstName = "Alma",
                        LastName = "Péter",
                        EmployeeRole = EmployeeRole.ManualTester,
                        HashedPassword = SecurePasswordHasher.Hash("HHtJ4Jhh")
                    },
                    new Employee()
                    {
                        Email = "banan.balint@talenthunters.com",
                        FirstName = "Banán",
                        LastName = "Bálint",
                        EmployeeRole = EmployeeRole.ManualTester,
                        HashedPassword = SecurePasswordHasher.Hash("FdsJo6f8")
                    },
                }
            };

            context.Divisions.AddRange(new List<Division> {division, division2, division3});
            context.SaveChanges();
        }
    }
}


