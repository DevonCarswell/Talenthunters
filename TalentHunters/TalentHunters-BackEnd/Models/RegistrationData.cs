namespace TalentHunters_BackEnd.Models
{
    public class RegistrationData
    {
        public string EmailToReg { get; }
        public string PasswordToReg { get; }
        public string ConfirmPasswordToReg { get; }

        public RegistrationData(string emailToReg, string passwordToReg, string confirmPasswordToReg)
        {
            EmailToReg = emailToReg;
            PasswordToReg = passwordToReg;
            ConfirmPasswordToReg = confirmPasswordToReg;
        }
    }
}
