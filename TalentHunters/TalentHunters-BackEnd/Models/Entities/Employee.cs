using System.ComponentModel.DataAnnotations.Schema;
using TalentHunters_BackEnd.Models.Enums;

namespace TalentHunters_BackEnd.Models.Entities
{
    public class Employee
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public EmployeeRole? EmployeeRole { get; set; }
        public DateTime RegistrationDate { get; set; } = DateTime.Now;
        public string Email { get;  set; }

        public string HashedPassword { get;  set; }

 


        //public User(string email, string hashedPassword)
        //{
        //    Email = email;
        //    HashedPassword = hashedPassword;
        //    RegistrationDate = DateTime.Now;
        //}

    }
}
