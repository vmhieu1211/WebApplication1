using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using WebApplication1.Models;
using WebApplication1.Repositories;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        private readonly IRepository<News> _newsRepository;
        private readonly IRepository<Category> _categoryRepository;
        private readonly IRepository<Characters> _charactersRepository;

        public HomeController(IRepository<News> newsRepository, IRepository<Category> categoryRepository, IRepository<Characters> characterRepository) 
        {
            _newsRepository = newsRepository;  
            _categoryRepository = categoryRepository;
            _charactersRepository = characterRepository;
        }

        public IActionResult Index()
        {
            var news = _newsRepository.GetAll(); 
            var category = _categoryRepository.GetAll();
            var characters = _charactersRepository.GetAll();
            if (news == null)
            {
                return NotFound(news);
            };
            if (category == null)
            {
                return NotFound(category);
            };
            if (characters == null)
            {
                return NotFound(characters);
            }
            var homeData = new Home
            {

                News = news,
                Categories = category,
                Characters = characters
            };
            return View(homeData);
        }

        public IActionResult NewsIndex()
        {
            var news = _newsRepository.GetAll();
            var category = _categoryRepository.GetAll();
            var newsData = new Home
            {
                News = news,
                Categories = category,
            };
            return View(newsData);
        }
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
