import { useEffect, useRef, useState } from "react";
import Tag from "./Tag";
import Task from "./Task";
import { DayDivision, Task as TaskInterface } from "../assets/types";

interface PartofDayProps {
  taskList: TaskInterface[];
  timeofDay: DayDivision;
}

export default function PartofDay(props: PartofDayProps) {
  const currentContainer = useRef<HTMLDivElement | null>(null);
  const [isScorllable, setIsScrollAble] = useState(false);
  useEffect(() => {
    const parentHeight = currentContainer.current?.clientHeight || 0;
    const childHeight =
      currentContainer.current?.querySelector("div")?.clientHeight || 0;
    childHeight > parentHeight ? setIsScrollAble(true) : setIsScrollAble(false);
  });

  const taskEl = props.taskList.map((task) => <Task {...task} />);

  return (
    <div
      ref={currentContainer}
      className={`relative w-full ${
        isScorllable ? "_scrollBarVisable" : "_scrollBarInvisable"
      } grow overflow-y-scroll borderflex flex-col items-center py-3
    `}
    >
      <Tag text={props.timeofDay} bg="bg-slate-600" />
      <div className=" mx-7 space-y-2">{taskEl}</div>
    </div>
  );
}
