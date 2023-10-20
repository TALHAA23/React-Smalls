import { DayDivision } from "./types";
import { hourDivison } from "./getTimeofDay";

export default function guessTimeofDayFromTheTask(
  taskOpenAt: number
): DayDivision {
  const { night, morning, afternoon, evening } = hourDivison;
  let timeofDay: DayDivision | null = null;
  if (taskOpenAt >= night.start || taskOpenAt <= night.end) timeofDay = "night";
  else if (taskOpenAt <= morning.end) timeofDay = "morning";
  else if (taskOpenAt <= afternoon.end) timeofDay = "afternoon";
  else if (taskOpenAt <= evening.end) timeofDay = "evening";
  else throw new Error("Hour is not handled");

  return timeofDay;
}
