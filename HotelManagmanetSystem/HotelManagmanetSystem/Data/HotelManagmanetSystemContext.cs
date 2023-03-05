using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using HotelManagmanetSystem.Models;

namespace HotelManagmanetSystem.Data
{
    public class HotelManagmanetSystemContext : DbContext
    {
        public HotelManagmanetSystemContext (DbContextOptions<HotelManagmanetSystemContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<HotelManagmanetSystem.Models.Customer> Customer { get; set; } = default!;

        public DbSet<HotelManagmanetSystem.Models.Booking> Booking { get; set; } = default!;

        public DbSet<HotelManagmanetSystem.Models.Room> Room { get; set; } = default!;

        public DbSet<HotelManagmanetSystem.Models.RoomType> RoomType { get; set; } = default!;
    }
}
