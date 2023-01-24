using TalentHunters_BackEnd.Models.Enums;

namespace TalentHunters_BackEnd.Models.HelperEntities
{
    public class EmployeeData
    {
        public long Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public EmployeeRole EmployeeRole { get; set; }
        public DateTime RegistrationDate { get; set; } = DateTime.Now;
        public string Email { get; set; }
        public string? Role { get; set; }
    }
}
