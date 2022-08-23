﻿using TalentHunters_BackEnd.Models.Entities;
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

            context.Employees.AddRange(new List<Employee>{user2,user1});
            context.SaveChanges();
        }
    }
}


