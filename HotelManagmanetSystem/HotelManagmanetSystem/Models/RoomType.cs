using System.ComponentModel.DataAnnotations;

namespace HotelManagmanetSystem.Models
{
    public class RoomType
    {
        [Key]
        public int RoomTypeId { get; set; }
        [Required]
        public string Type { get; set; }

    }
}
