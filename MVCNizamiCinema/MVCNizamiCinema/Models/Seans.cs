using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MVCNizamiCinema.Models
{
    public class Seans
    {
        [Key]
        public int Id { get; set; }
        public TimeSpan Time { get; set; }

        [ForeignKey("Movie")]
        public int MovieId { get; set; }
        public Movie Movie{ get; set; }

        [ForeignKey("Hall")]
        public int HallId { get; set; }
        public Hall Hall { get; set; }

        [ForeignKey("Poster")]
        public int PosterId { get; set; }
        public Poster Poster { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
