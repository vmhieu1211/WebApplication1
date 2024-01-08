using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using WebApplication1.Models;
using WebApplication1.Repositories;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        private readonly NewsServices _newsServices;
        private readonly CategoryServices _categoryServices;
        private readonly IRepository<Characters> _charactersRepository;

        public HomeController(NewsServices newsServices, CategoryServices categoryServices, IRepository<Characters> characterRepository) 
        {
            _newsServices = newsServices;
            _categoryServices = categoryServices;
            _charactersRepository = characterRepository;
        }

        public IActionResult Index()
        {
            var news = _newsServices.GetAll(); 
            var category = _categoryServices.GetAll();
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
            var news = _newsServices.GetAll();
            var category = _categoryServices.GetAll();
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
