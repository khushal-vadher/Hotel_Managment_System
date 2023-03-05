using System.ComponentModel.DataAnnotations;

namespace HotelManagmanetSystem.Models
{
    public class Room
    {
        [Key]
        public int RoomId { get; set; }

        [Required]
        public bool Available { get; set; }

        [Required]
        public string? Description { get; set; }

        [Required]
        public int? MaximumGuests { get; set; }

        public virtual RoomType RoomType { get; set; }
    }
}
