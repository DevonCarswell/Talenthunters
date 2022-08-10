namespace TalentHunters_BackEnd.Models
{
    public class RegistrationData
    {
        public string EmailToReg { get; }
        public string PasswordToReg { get; }


        public RegistrationData(string emailToReg, string passwordToReg)
        {
            EmailToReg = emailToReg;
            PasswordToReg = passwordToReg;

        }
    }
}
