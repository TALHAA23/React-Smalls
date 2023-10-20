import { DayDivision } from "./types";

export const hourDivison = {
  night: {
    start: 21,
    end: 5,
  },
  morning: {
    start: 5,
    end: 12,
  },
  afternoon: {
    start: 12,
    end: 17,
  },
  evening: {
    start: 17,
    end: 21,
  },
};

export default function getTimeofDay(): DayDivision {
  const { night, morning, afternoon, evening } = hourDivison;
  let timeofDay: DayDivision | null = null;
  const now = new Date();
  const currentHour = now.getHours();

  if (currentHour >= night.start || currentHour <= night.end)
    timeofDay = "night";
  else if (currentHour <= morning.end) timeofDay = "morning";
  else if (currentHour <= afternoon.end) timeofDay = "afternoon";
  else if (currentHour <= evening.end) timeofDay = "evening";
  else throw new Error("Hour is not handled");

  return timeofDay;
}
