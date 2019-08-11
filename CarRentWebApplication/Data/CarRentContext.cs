using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace CarRentWebApplication.CarRentalDataAcess
{
    public class CarRentContext : DbContext
    {
        public CarRentContext (DbContextOptions<CarRentContext> options)
            : base(options)
        {
        }

        public DbSet<Models.Car> Cars { get; set; }
        public DbSet<Models.User> Users { get; set; }
        public DbSet<Models.CarRequest> CarRequsets { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Models.CarRequest>()
                .HasOne(cr => cr.Car);
            modelBuilder.Entity<Models.CarRequest>()
                .HasOne(cr => cr.User);
        }
    }
}
