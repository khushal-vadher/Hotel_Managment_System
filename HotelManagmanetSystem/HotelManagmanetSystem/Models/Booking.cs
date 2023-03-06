using System.ComponentModel.DataAnnotations;

namespace HotelManagmanetSystem.Models
{
    public class Booking
    {
        [Key]
        public int BookId { get; set; }
     
        [Required]
        public Decimal Price { get; set; }
        [Required]
        public DateTime CheackIn { get; set; }
        [Required]
        public DateTime CheackOut { get; set; }

        public Room? Room { get; set; } //room number kind of thing


        

       

    }
}
