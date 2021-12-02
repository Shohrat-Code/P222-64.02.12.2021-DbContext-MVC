using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MVCNizamiCinema.Models
{
    public class News
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(500)]
        public string Title { get; set; }
        [Column(TypeName ="ntext")]
        public string Content { get; set; }
        public DateTime CreatedDate { get; set; }
        public List<NewsImage> NewsImages { get; set; }
    }
}
