import { TagColor, DayDivision } from "../assets/types";
export interface TagProps {
  text: DayDivision;
  bg: TagColor;
}

export default function Tag(props: TagProps) {
  return (
    <h3
      className={`absolute right-1 top-1 text-[.6em] font-semibold text-black rounded-full ${props.bg} px-2 py-1`}
    >
      {props.text}
    </h3>
  );
}
