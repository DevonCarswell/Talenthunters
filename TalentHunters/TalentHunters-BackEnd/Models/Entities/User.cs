using System.ComponentModel.DataAnnotations.Schema;

namespace TalentHunters_BackEnd.Models.Entities
{
    public class User
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; }
        public DateTime RegistrationDate { get; }
        public string Email { get; private set; }

        public string HashedPassword { get; }


        public User(string email, string hashedPassword)
        {
            Email = email;
            HashedPassword = hashedPassword;
            RegistrationDate = DateTime.Now;
        }

    }
}
