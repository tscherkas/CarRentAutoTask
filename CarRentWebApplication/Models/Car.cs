using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CarRentWebApplication.Models
{
    public class Car
    {
        [Key]
        public long Id { get; set; }
        public string Manufactorer { get; set; }
        public string Model { get; set; }
        public string Class { get; set; }
        public int ManufactoryYear { get; set; }
        public string RegistrationNumber { get; set; }
    }
}
