﻿using Microsoft.EntityFrameworkCore;
using TalentHunters_BackEnd.Models.Entities;

namespace TalentHunters_BackEnd.DAL
{
    public class TalentHuntersContext : DbContext
    {
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Division> Divisions { get; set; }
        public TalentHuntersContext(DbContextOptions<TalentHuntersContext> options) : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>().ToTable("Employee");
            modelBuilder.Entity<Division>().ToTable("Division");
        }




        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    var configuration = new ConfigurationBuilder()
        //        .SetBasePath(Directory.GetCurrentDirectory())
        //        .AddJsonFile("appsettings.json")
        //        .Build();

        //    var connectionString = configuration.GetConnectionString("DefaultConnection");
        //    optionsBuilder.UseSqlServer(connectionString);
        //}
    }
}
