namespace TalentHunters_BackEnd.Models.HelperEntities
{
    public class LoggedUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string Email { get; set; }
        public string? Role { get; set; }
    }
}
