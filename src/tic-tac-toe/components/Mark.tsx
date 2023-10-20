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
      className={`${markSize} aspect-square rounded-full border-2 ${markColor}`}
    ></div>
  );
}

const getMarkColor = (sign: Sign): string => {
  if (sign == "O") return "border-blue-400";
  else if (sign == "X") return "border-red-400";
  else return "border-gray-400";
};
