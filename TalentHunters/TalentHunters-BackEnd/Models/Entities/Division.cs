using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.CompilerServices;
using TalentHunters_BackEnd.Models.Enums;

namespace TalentHunters_BackEnd.Models.Entities
{
    public class Division
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        public string Name { get; set; }
        public Employee Manager { get; set; }

        public HashSet<Employee> Employees { get; set; }

        public Division()
        {
            Employees = new HashSet<Employee>();
        }


    }
}
