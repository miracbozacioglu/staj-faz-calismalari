using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Gun3_Migrations
{
    public  class AppDbContext: DbContext
    {
        public DbSet<Kullanici> Kullanicilar { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(
                "Server=DESKTOP-15I5391;Database=EFCoreDemo;Trusted_Connection=True;TrustServerCertificate=True;"
            );
        }
    }
}
