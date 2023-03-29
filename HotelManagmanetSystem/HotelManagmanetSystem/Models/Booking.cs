using NuGet.Protocol;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace HotelManagmanetSystem.Models
{
    public class Booking
    {
        [Key]
        public int BookId { get; set; }
     
        [Required]
        public DateTime CheackIn { get; set; }
        [Required]
        public DateTime CheackOut { get; set; }

        public int RoomId { get; set; }

        [JsonIgnore]

        public  Room? Room { get; set; } //room number kind of thing

        public int CustomerId { get; set; }

        [JsonIgnore]

        public  Customer? Customer { get; set; }
        [Required]
        public int guests { get; set; }
        [Required]
        public string roomType { get; set; }

       

    }
}
