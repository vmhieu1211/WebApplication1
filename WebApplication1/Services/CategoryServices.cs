using WebApplication1.Data;
using WebApplication1.Models;

namespace WebApplication1.Services
{
    public class CategoryServices
    {
        private readonly NewsDbContext _context;
        public CategoryServices(NewsDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Category> GetAll()
        {
            return _context.Categories.ToList();
        }
        public Category GetById(int id)
        {
            return _context.Categories.Find(id);
        }

        public void Create(Category category)
        {
            _context.Categories.Add(category);
            _context.SaveChanges();
        }

        public void Update(Category updateCategory, int id)
        {
            var category = _context.Categories.Find(id);
            if (category != null && updateCategory != null)
            {
                category.Name = updateCategory.Name;
                category.Description = updateCategory.Description;
                _context.SaveChanges();
            }
        }

        public void delete(int id)
        {
            var category = _context.Categories.Find(id);
            if (category != null)
            {
                _context.Categories.Remove(category);
                _context.SaveChanges();
            }
        }
    }
}
