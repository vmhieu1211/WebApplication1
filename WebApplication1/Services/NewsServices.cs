using Microsoft.Extensions.Hosting;
using WebApplication1.Data;
using WebApplication1.Models;
using WebApplication1.Repositories;

namespace WebApplication1.Services
{
    public class NewsServices : Repository<News>
    {
        private readonly NewsDbContext _context;
        public NewsServices(NewsDbContext context) :base(context) 
        {
            _context = context;
        }

        public IEnumerable<News> GetAll() 
        { 
            return _context.News.ToList();
        }
        public News GetById(int id)
        {
            return _context.News.Find(id);
        }

        public void Create(News news)
        {
            _context.News.Add(news);
            _context.SaveChanges();
        }

        public void Update(News updateNews,int id)
        {
            var news = _context.News.Find(id);
            if (news != null)
            { 
                news.Title = updateNews.Title;
                news.Description = updateNews.Description;
                news.Content = updateNews.Content;
                news.Image = updateNews.Image;
                news.Image2 = updateNews.Image2;
                news.CreatedDate = updateNews.CreatedDate;
            }
        }

        public void delete(int id)
        {
            var news =_context.News.Find(id);
            if(news != null)
            {
                _context.News.Remove(news);
                _context.SaveChanges();
            }
        }
    }
}
