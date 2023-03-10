using System.ComponentModel.DataAnnotations;

namespace HotelManagmanetSystem.Models
{
    public class Customer
    {
        [Key]
        public int CustId { get; set; }
        [Required]
        public string CustomerName { get; set; }
        [Required]
        public string CustomerEmail { get; set; }
        [Required]
        public string CustomerAddress { get; set; }
        [Required]
        public string CustomerCity { get; set; }

       
        
    }
}
