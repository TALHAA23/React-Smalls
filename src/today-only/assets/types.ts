type TagColor = "bg-slate-600";
type DayDivision = "morning" | "afternoon" | "evening" | "night";
type WaveColor = "#292752" | "#078f1b" | "#FCB900" | "#000b76";
type SkyColor =
  | "bg-slate-900"
  | "bg-blue-100"
  | "bg-yellow-100"
  | "bg-indigo-900";
type SunMoon =
  | ["#E3E0E0", "#AAA9A7"]
  | ["#ECEE76", "#FFAD00"]
  | ["#F3DE00", "#FCFA98"]
  | ["#F87537", "#FBA81F"];

type TaskLabel = "routine" | "unusual" | "exceptional";
type Status = "complete" | "pending" | "expired";
interface Task {
  id: string;
  title: FormDataEntryValue;
  taskLabel: FormDataEntryValue | TaskLabel;
  timeofDay: DayDivision;
  openAt: FormDataEntryValue;
  status: Status;
  requireBy?: FormDataEntryValue;
}
export type {
  TagColor,
  DayDivision,
  WaveColor,
  SunMoon,
  SkyColor,
  TaskLabel,
  Task,
};
