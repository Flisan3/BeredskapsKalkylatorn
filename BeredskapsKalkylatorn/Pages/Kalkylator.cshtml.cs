using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using BeredskapsKalkylatorn.Models;

namespace BeredskapsKalkylatorn.Pages
{
    public class KalkylatorModel : PageModel
    {
        [BindProperty]
        public Kalkylator Kalkylator { get; set; }

        public int Score { get; set; }

        public string Result { get; set; }

        public bool HasCalculated { get; set; } = false;

        public void OnGet()
        {
        }

        public void OnPost()
        {
            if (!ModelState.IsValid)
            {
                return;
            }

            int points = 0;

            if (Kalkylator.DrinkingWater)
                points++;

            if (Kalkylator.Food)
                points++;

            if (Kalkylator.Flashlight)
                points++;

            if (Kalkylator.Radio)
                points++;

            if (Kalkylator.FirstAidKit)
                points++;

            if (Kalkylator.ExtraBatteries)
                points++;

            if (Kalkylator.AlternativeCooking)
                points++;

            int missingPoints = 7 - points;

            double householdFactor = 1.0 + ((Kalkylator.HouseholdSize - 1) * 0.15);

            double penalty = missingPoints * householdFactor;

            Score = 4 - (int)Math.Ceiling(penalty * 4 / 7);

            Score = Math.Clamp(Score, 0, 4);

            if (Score <= 1)
            {
                Result = "Behöver förbättra beredskapen";
            }
            else if (Score <= 3)
            {
                Result = "Delvis förberedd";
            }
            else
            {
                Result = "God beredskap";
            }

            HasCalculated = true;
        }
    }
}