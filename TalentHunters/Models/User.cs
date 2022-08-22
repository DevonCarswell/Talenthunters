namespace TalentHunters.Models
{
    public class User
    {
        
        public Guid Id { get;  }
        public DateTime RegistrationDate { get;  }
        public string Email { get;  }

        public string HashedPassword { get;  }


        public User(string email, string hashedPassword)
        {
            Email = email;
            HashedPassword = hashedPassword;
            Id = Guid.NewGuid();
            RegistrationDate = DateTime.Now;
        }


    }
}
