using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{
    //[Route("api/[controller]")]
    //[ApiController]
    public class NewsController : Controller
    {
        private readonly NewsServices _newsServices;

        public NewsController(NewsServices newsServices)
        {
            _newsServices = newsServices;
        }
        [HttpGet]
        public IActionResult GetAll(int pg = 1)
        {
            var news = _newsServices.GetAll();
            return View(news);
        }
        [HttpGet("{slug}")]
        public IActionResult Details(string slug)
        {
            var news = _newsServices.GetBySlug(slug);

            if (news == null)
            {
                return NotFound();
            }

            return View(news);
        }

        [HttpPost]
        public IActionResult Create(News news)
        {
            _newsServices.Create(news);
            return CreatedAtAction(nameof(Details), new { id = news.Id }, news);
        }
        [HttpPut("{id}")]
        public IActionResult Update(int id, News updateNews)
        {
            _newsServices.Update(updateNews, id);
            return Ok();
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _newsServices.Delete(id);
            return NoContent();
        }
    }
}
