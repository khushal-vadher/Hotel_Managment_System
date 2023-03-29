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



    }
}
