using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MVCNizamiCinema.Models
{
    public class Hall
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(20)]
        public string Name { get; set; }
        [MaxLength(1500)]
        public string About { get; set; }
        public DateTime CreatedDate { get; set; }
        public List<HallImage> HallImage { get; set; }
        public List<Seans> Seans { get; set; }
    }
}
