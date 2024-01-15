using Microsoft.Extensions.Hosting;
using System.Collections.Generic;
using System.Linq;
using WebApplication1.Data;
using WebApplication1.Models;
using WebApplication1.Repositories;

namespace WebApplication1.Services
{
    public class NewsServices : Repository<News>
    {
        private readonly NewsDbContext _context;
        private readonly IRepository<News> _repository;
        public NewsServices(NewsDbContext context) :base(context) 
        {
            _context = context;
        }
 
        public IEnumerable<News> GetAll(int page = 1, int pageSize = 10) 
        {
            DateTime currentDate = DateTime.Today;
            int skip = (page - 1) * pageSize;

            var news = _context.News
                .Where(news => news.Publish && news.PublishDate <= currentDate)
                .OrderByDescending(news => news.PublishDate)
                .Skip(skip)
                .Take(pageSize)
                .ToList();
            return news;
        }
        public News GetById(int id)
        {
            return _context.News.Find(id);
        }
        
        public News GetBySlug(string slug)
        {
            return _context.News.FirstOrDefault(news => news.Slug == slug);
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
                news.PublishDate = updateNews.PublishDate;
                news.Publish = updateNews.Publish;
                news.Slug   = updateNews.Slug;
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
