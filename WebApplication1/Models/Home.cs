namespace WebApplication1.Models
{
    public class Home
    {
        public IEnumerable<News> News { get; set; }
        public IEnumerable<Category> Categories { get; set; }
        public IEnumerable<Characters> Characters { get; set; }
        public IEnumerable<Pager> Pager { get; set; }
        public int CurrentPage { get; set; }
        public int TotalPage { get; set; }
    }
}
