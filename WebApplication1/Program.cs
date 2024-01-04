using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Models;
using WebApplication1.Repositories;
using WebApplication1.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddScoped<IRepository<Home>, Repository<Home>>();
builder.Services.AddScoped<IRepository<News>, Repository<News>>();
builder.Services.AddScoped<IRepository<Category>, Repository<Category>>();
builder.Services.AddScoped<IRepository<Characters>, Repository<Characters>>();
builder.Services.AddScoped<CategoryServices>();
builder.Services.AddScoped<NewsServices>();





builder.Services.AddDbContext<NewsDbContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("NewsConnectionStrings")));
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.MapControllerRoute(
    name: "news",
    pattern: "{controller=Home}/{action=NewsIndex}/{id?}");


app.Run();
