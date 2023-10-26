import { useRef } from "react";
import { Sign } from "../assets/type";
interface MarkInterface {
  markedBy: Sign;
}
type Size = "md" | "lg";
const SIZE = {
  sm: "w-[50%]",
  md: "w-[60%]",
  lg: "w-[70%]",
};
export default function Mark(props: MarkInterface) {
  const markColor = getMarkColor(props.markedBy);
  return (
    <div
      className={`medium-mark ${SIZE.sm} aspect-square rounded-full border-2 ${markColor}`}
    >
      {["md", "lg"].map((size) => (
        <AdditionalBox size={size as Size} />
      ))}
    </div>
  );
}

function AdditionalBox(props: { size: Size }) {
  return (
    <span
      id={props.size}
      className={`absolute ${
        SIZE[props.size]
      } invisible aspect-square rounded-full border-2 border-inherit top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2`}
    ></span>
  );
}

const getMarkColor = (sign: Sign): string => {
  if (sign == "O") return "border-blue-400";
  else if (sign == "X") return "border-red-400";
  else return "border-gray-400";
};
