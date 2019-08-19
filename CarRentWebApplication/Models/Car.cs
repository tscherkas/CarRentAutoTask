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
        [Required]
        public string Manufactorer { get; set; }
        public string Model { get; set; }
        public string Class { get; set; }
        [Required(AllowEmptyStrings = false, ErrorMessage = "Please, provide a valid Manufactory year in range 1900-2100")]
        [Range(minimum: 1900, maximum: 2100, ErrorMessage = "Manufactory year should be in range 1900-2100")]
        public int ManufactoryYear { get; set; }
        public string RegistrationNumber { get; set; }
    }
}
