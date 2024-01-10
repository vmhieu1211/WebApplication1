using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
using WebApplication1.Repositories;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : Controller
    {
        private readonly CategoryServices _categoryServices;
        public CategoryController(CategoryServices categoryServices)
        {
            _categoryServices = categoryServices;
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            var category = _categoryServices.GetAll();
            return Ok(category);
        }
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
           var category = _categoryServices.GetById(id);
            if (category == null)
            {
                return NotFound();
            }
            return Ok(category);
        }
        [HttpPost]
        public IActionResult Create(Category category)
        {
            _categoryServices.Create(category);
            return CreatedAtAction(nameof(GetById), new { id = category.Id }, category);
        }
        [HttpPut("{id}")]
        public IActionResult Update(int id, Category updateCategory)
        {
            _categoryServices.Update(updateCategory, id);
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _categoryServices.delete(id);
            return NoContent();
        }
    }
}
