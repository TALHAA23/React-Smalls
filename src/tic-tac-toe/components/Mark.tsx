import { useRef } from "react";
import { Sign } from "../assets/type";
interface MarkInterface {
  markedBy: Sign;
  size: "sm" | "lg";
}
export default function Mark(props: MarkInterface) {
  const markColor = getMarkColor(props.markedBy);
  const markSize = props.size == "sm" ? "w-1/2" : "w-[80%]";
  return (
    <div
      className={`medium-mark relative ${markSize} aspect-square rounded-full border-2 ${markColor}
      before:invisible before:absolute before:-inset-2 before:aspect-square before:rounded-full before:border-2 before:border-yellow-500
      after:invisible after:absolute after:-inset-4 after:aspect-square after:border-2 after:rounded-full after:border-pink-600
      `}
    ></div>
  );
}

const getMarkColor = (sign: Sign): string => {
  if (sign == "O") return "border-blue-400";
  else if (sign == "X") return "border-red-400";
  else return "border-gray-400";
};
