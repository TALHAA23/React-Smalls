import { DayDivision } from "../assets/types";
import { useReducerProvider } from "../hook/ReducerProvider";
import PartofDay from "./PartofDay";

export default function TaskContainer() {
  const myTasks = useReducerProvider()?.tasks.list;
  if (!myTasks) return;
  const mapableTasks = Object.entries(myTasks);
  const elementsFromMyTasks = mapableTasks.map(([key, value]) => {
    return (value as []).length ? (
      <PartofDay taskList={value} timeofDay={key as DayDivision} />
    ) : (
      <small className="self-center text-slate-800">No task for {key}</small>
    );
  });

  return <div className="flex flex-col gap-1 mx-1">{elementsFromMyTasks}</div>;
}
