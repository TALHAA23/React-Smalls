import { DayDivision, SkyColor } from "./types";

export default function getSkyColor(timeofDay: DayDivision): SkyColor {
  let skyColor: SkyColor | null = null;
  if (timeofDay == "night") skyColor = "bg-slate-900";
  else if (timeofDay == "morning") skyColor = "bg-blue-100";
  else if (timeofDay == "afternoon") skyColor = "bg-yellow-100";
  else if (timeofDay == "evening") skyColor = "bg-indigo-900";
  else throw new Error("No Sky Color for current time of day");

  return skyColor;
}
