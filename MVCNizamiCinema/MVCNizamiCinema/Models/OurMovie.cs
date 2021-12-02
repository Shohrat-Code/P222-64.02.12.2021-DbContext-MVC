using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MVCNizamiCinema.Models
{
    public class OurMovie
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(20)]
        public string Name { get; set; }
        [Column(TypeName ="ntext")]
        public string Content { get; set; }
        public DateTime CreatedDate { get; set; }
        public List<OurMovieImage> OurMovieImages { get; set; }
    }
}
