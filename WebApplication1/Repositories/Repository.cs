using WebApplication1.Data;

namespace WebApplication1.Repositories
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class

    {
        private readonly NewsDbContext _context;

        public Repository(NewsDbContext context)
        {
            _context = context;
        }

        public IEnumerable<TEntity> GetAll()
        {
            return _context.Set<TEntity>().ToList();
        }
        public TEntity GetById(int id)
        {
            return _context.Set<TEntity>().Find(id);
        }

        public void Create(TEntity entity)
        {
            _context.Set<TEntity>().Add(entity);
            _context.SaveChanges();
        }

        public void Update(TEntity entity)
        {
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var entity = _context.Set<TEntity>().Find(id);
            if (entity != null)
            {
                _context.Set<TEntity>().Remove(entity);
                _context.SaveChanges();
            }
        }
    }
}
