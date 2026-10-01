using BeredskapsKalkylatorn.Models;
using System.ComponentModel.DataAnnotations;
using static System.Net.Mime.MediaTypeNames;

namespace BeredskapsKalkylatorn.Models
{
    public class Kalkylator
    {
        [Required(ErrorMessage = "Namn måste fyllas i")]
        [RegularExpression(@"^[A-Za-zÅÄÖåäöÉéÜü]+[ ]+[A-Za-zÅÄÖåäöÉéÜü]+$", ErrorMessage = "Fyll i både förnamn och efternamn")]

        public string Name { get; set; }

        [Required(ErrorMessage = "Email måste fyllas i")]
        [EmailAddress(ErrorMessage = "Ange en giltig emailadress")]
        [RegularExpression(@"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$", ErrorMessage = "Ange en giltig emailadress")]
        public string Email { get; set; }

        public bool DrinkingWater { get; set; }

        public bool Food { get; set; }

        public bool Flashlight { get; set; }

        public bool Radio { get; set; }

        public bool FirstAidKit { get; set; }

        public bool ExtraBatteries { get; set; }

        public bool AlternativeCooking { get; set; }

        [Range(1, 5, ErrorMessage = "Hushållet måste ha mellan 1 och 5 personer")]
        public int HouseholdSize { get; set; }

        [Required(ErrorMessage = "Du måste skriva ett beredskapstips")]
        [StringLength(500, ErrorMessage = "Tips får vara högst 500 tecken")]
        public string Tips { get; set; }
    }
}

