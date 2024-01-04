using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class News
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        [StringLength(1000)]
        public string? Content { get; set; }
        [Required]
        public string? Image { get; set; }

        public string Image2 { get; set; } = null!;

        [Required]
        public DateTime CreatedDate { get; set; }

        public int CategoryId { get; set; }
        public Category Category { get; set; }

    }
}
