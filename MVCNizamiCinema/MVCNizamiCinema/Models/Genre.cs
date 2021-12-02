﻿using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MVCNizamiCinema.Models
{
    public class Genre
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(30)]
        public string Name { get; set; }
        public List<GenreToMovie> GenreToMovies { get; set; }
    }
}
