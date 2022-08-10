namespace TalentHunters_BackEnd.Models
{
    public class User
    {
        public Guid Id { get; }
        public DateTime RegistrationDate { get; }
        public string Email { get; private set; }

        public string HashedPassword { get; }


        public User(string email, string hashedPassword)
        {
            Email = email;
            HashedPassword = hashedPassword;
            Id = Guid.NewGuid();
            RegistrationDate = DateTime.Now;
        }

        public void UpdateEmail(string email)
        {
            this.Email = email;
        }
    }
}
