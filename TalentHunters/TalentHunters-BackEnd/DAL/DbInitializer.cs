using TalentHunters_BackEnd.Models.Entities;
using TalentHunters_BackEnd.Utilities;

namespace TalentHunters_BackEnd.DAL
{
    public class DbInitializer
    {

        public static void Initialize(TalentHuntersContext context)
        {
            context.Database.EnsureCreated();

            if (context.Users.Any())
            {
                return;
            }

            var user1 = new User("zsolt@zsolt.hu", SecurePasswordHasher.Hash("1234"));
            var user2 = new User("dalma@dalma.hu", SecurePasswordHasher.Hash("4567"));

            context.Users.AddRange(new List<User>{user2,user1});
            context.SaveChanges();
        }
    }
}


