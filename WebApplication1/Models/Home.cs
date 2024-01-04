namespace WebApplication1.Models
{
    public class Home
    {
        public IEnumerable<News> News { get; set; }
        public IEnumerable<Category> Categories { get; set; }
        public IEnumerable<Characters> Characters { get; set; }
    }
}
