using Microsoft.EntityFrameworkCore;
using MVCNizamiCinema.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MVCNizamiCinema.Data
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> option):base(option)
        {

        }

        public DbSet<Country> Countries { get; set; }
        public DbSet<CountryToMovie> CountryToMovies { get; set; }
        public DbSet<Format> Formats { get; set; }
        public DbSet<Genre> Genres { get; set; }
        public DbSet<GenreToMovie> GenreToMovies { get; set; }
        public DbSet<Hall> Halls { get; set; }
        public DbSet<HallImage> HallImages { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<News> News { get; set; }
        public DbSet<NewsImage> NewsImages { get; set; }
        public DbSet<OurMovie> OurMovies { get; set; }
        public DbSet<OurMovieImage> OurMovieImages { get; set; }
        public DbSet<Poster> Posters { get; set; }
        public DbSet<Seans> Seanses { get; set; }
        public DbSet<Setting> Settings { get; set; }
        public DbSet<Social> Socials { get; set; }
    }
}
