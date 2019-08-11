using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CarRentWebApplication.Models
{
    public class CarRequest
    {
        [Key]
        public long RequestNumber { get; set; }
        public DateTime DateStart { get; set; }
        public DateTime DateEnd { get; set; }
        public Car Car { get; set; }
        public User User { get; set; }
        public string Comment { get; set; }
    }
}
