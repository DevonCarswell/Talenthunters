using TalentHunters_BackEnd.Models.Enums;

namespace TalentHunters_BackEnd.Models.HelperEntities
{
    public class EmployeeData
    {
        public long Id { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public EmployeeRole Employee_Role { get; set; }
        public DateTime Registration_Date { get; set; }
        public string Email { get; set; }
        public string? Role { get; set; }
    }
}
