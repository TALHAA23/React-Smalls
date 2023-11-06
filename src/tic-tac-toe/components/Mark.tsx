import { Sign } from "../assets/type";
import { useMarkerTheme } from "../hooks/ThemeProvider";
interface MarkInterface {
  markedBy: Sign;
}

export default function Mark(props: MarkInterface) {
  const markColor = getMarkColor(props.markedBy);
  return (
    <div className={`w-full relative ${markColor}`}>{useMarkerTheme()}</div>
  );
}

const getMarkColor = (sign: Sign): string => {
  if (sign == "O") return "border-blue-400 text-blue-400";
  else if (sign == "X") return "border-red-400 text-red-400";
  else return "border-gray-400";
};
