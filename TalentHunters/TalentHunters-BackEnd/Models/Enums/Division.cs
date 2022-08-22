using System.ComponentModel.DataAnnotations.Schema;
using TalentHunters_BackEnd.Models.Entities;

namespace TalentHunters_BackEnd.Models.Enums
{
    public class Division
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        public string Name { get; set; }

        public Employee Manager { get; set; }


        public HashSet<Employee> Employees { get; set; } = new HashSet<Employee>();



    }
}
