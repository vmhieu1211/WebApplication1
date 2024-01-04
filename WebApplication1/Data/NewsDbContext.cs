global using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Data
{
    public class NewsDbContext : DbContext
    {
        public NewsDbContext(DbContextOptions options) : base(options) 
        { 

        }
        public DbSet<Category> Categories { get; set; }

        public DbSet<News> News { get; set; } 
        public DbSet<Characters> Characters { get; set; }

    }
}
