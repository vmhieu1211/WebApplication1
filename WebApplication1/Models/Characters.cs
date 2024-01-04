using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class Characters
    {
        public int Id {  get; set; }
        public string? Name { get; set; }
        public string? ImagePath { get; set; }
    }
}
