import { DayDivision, SunMoon } from "./types";

export default function getSunColor(timeofDay: DayDivision): SunMoon {
  let gradient: SunMoon | null = null;
  if (timeofDay == "night") gradient = ["#E3E0E0", "#AAA9A7"];
  else if (timeofDay == "morning") gradient = ["#ECEE76", "#FFAD00"];
  else if (timeofDay == "afternoon") gradient = ["#F3DE00", "#FCFA98"];
  else if (timeofDay == "evening") gradient = ["#F87537", "#FBA81F"];
  else throw new Error("No gradient for current time of day");

  return gradient;
}
