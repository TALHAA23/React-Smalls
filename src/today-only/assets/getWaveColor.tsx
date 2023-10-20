import { DayDivision, WaveColor } from "./types";

export default function getWaveColor(timeofDay: DayDivision): WaveColor {
  let waveColor: WaveColor | null = null;
  if (timeofDay == "night") waveColor = "#292752";
  else if (timeofDay == "morning") waveColor = "#078f1b";
  else if (timeofDay == "afternoon") waveColor = "#FCB900";
  else if (timeofDay == "evening") waveColor = "#000b76";
  else throw Error("Time of day is not valid");

  return waveColor;
}
