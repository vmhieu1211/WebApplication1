using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using WebApplication1.Models;
using WebApplication1.Repositories;
using WebApplication1.Services;
using X.PagedList;

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

        public IActionResult Index(int? page = 1)
        {
            //const int pageSize = 5;

            var news = _newsServices.GetAll().ToPagedList(page ?? 1,5);
            if (news == null)
            {
                return NotFound(news);
            }
            //int total = news.Count();
            //int totalPage = (int)Math.Ceiling((decimal)total / (decimal)pageSize);
            //int offset = (pg - 1) * pageSize;
            ////var pager = new Pager(recsCount, pageSize);
            //var data = news.Skip(offset).Take(pageSize).ToList();

            var category = _categoryServices.GetAll();
            var characters = _charactersRepository.GetAll();

            if (category == null)
            {
                return NotFound(category);
            }

            if (characters == null)
            {
                return NotFound(characters);
            }

            var homeData = new Home
            {
                News = news, 
                //CurrentPage = page, 
                //TotalPage = totalPage, 
                Categories = category,
                Characters = characters
            };

            //this.ViewBag.Pager = pager;

            return View(homeData);
        }

        public IActionResult NewsIndex(int? page = 1)
        {
            var news = _newsServices.GetAll().ToPagedList(page ?? 1,5);
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
