using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

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
        public int MaximumGuests { get; set; }

        public int RoomTypeId { get; set; }

        [JsonIgnore]

        public  RoomType? RoomType { get; set; }

    }
}
