﻿// <auto-generated />
using System;
using CarRentWebApplication.CarRentalDataAcess;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace CarRentWebApplication.Migrations
{
    [DbContext(typeof(CarRentContext))]
    [Migration("20190811100246_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("CarRentWebApplication.Models.Car", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Class");

                    b.Property<string>("Manufactorer");

                    b.Property<int>("ManufactoryYear");

                    b.Property<string>("Model");

                    b.Property<string>("RegistrationNumber");

                    b.HasKey("Id");

                    b.ToTable("Cars");
                });

            modelBuilder.Entity("CarRentWebApplication.Models.CarRequest", b =>
                {
                    b.Property<long>("RequestNumber")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<long?>("CarId");

                    b.Property<string>("Comment");

                    b.Property<DateTime>("DateEnd");

                    b.Property<DateTime>("DateStart");

                    b.Property<long?>("UserId");

                    b.HasKey("RequestNumber");

                    b.HasIndex("CarId");

                    b.HasIndex("UserId");

                    b.ToTable("CarRequsets");
                });

            modelBuilder.Entity("CarRentWebApplication.Models.User", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("BirthDate");

                    b.Property<string>("DriverLicenseNumber");

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("CarRentWebApplication.Models.CarRequest", b =>
                {
                    b.HasOne("CarRentWebApplication.Models.Car", "Car")
                        .WithMany()
                        .HasForeignKey("CarId");

                    b.HasOne("CarRentWebApplication.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId");
                });
#pragma warning restore 612, 618
        }
    }
}