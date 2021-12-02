using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MVCNizamiCinema.Models
{
    public class Movie
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(250)]
        public string Title { get; set; }
        [MaxLength(250)]
        public string Image { get; set; }
        [NotMapped]
        public IFormFile ImageFile { get; set; }
        [Column(TypeName ="smallint")]
        public short Year { get; set; }
        [Column(TypeName = "smallint")]
        public short Duration { get; set; }
        public byte MPA { get; set; }
        [MaxLength(150)]
        public string Editor { get; set; }
        [MaxLength(150)]
        public string Senari { get; set; }
        [MaxLength(500)]
        public string Cast { get; set; }
        public string About { get; set; }
        [MaxLength(250)]
        public string Trailer { get; set; }
        [NotMapped]
        public IFormFile TrailerFile { get; set; }
        public DateTime CreatedDate { get; set; }
        [ForeignKey("Format")]
        public int FormatId { get; set; }
        public Format Format { get; set; }
        public List<CountryToMovie> CountryToMovies { get; set; }
        public List<GenreToMovie> GenreToMovies { get; set; }
        public List<Poster> Posters { get; set; }
        public List<Seans> Seans { get; set; }
    }
}
