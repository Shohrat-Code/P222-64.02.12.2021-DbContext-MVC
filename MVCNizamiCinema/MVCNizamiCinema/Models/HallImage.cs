using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MVCNizamiCinema.Models
{
    public class HallImage
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(20)]
        public string Name { get; set; }
        [ForeignKey("Hall")]
        public int HallId { get; set; }
        public Hall Hall { get; set; }
    }
}
