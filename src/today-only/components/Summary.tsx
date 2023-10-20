import getSummery from "../assets/getSummery";
import { useReducerProvider } from "../hook/ReducerProvider";

export default function Summery() {
  const myTasks = useReducerProvider()?.tasks;
  if (!myTasks) return;
  const summery = getSummery(myTasks);

  return (
    <div
      className=" absolute z-30 bottom-2 right-2 bg-slate-900 p-1 rounded
     grid grid-cols-3 gap-1
    "
    >
      <div className=" col-start-1 col-end-2">
        <TaskCounts title="total" count={summery.totalNumberofTasks} />
      </div>
      <div className=" col-start-2 col-end-3">
        <TaskCounts title="completed" count={summery.numberofCompeleteTasks} />
      </div>
      <div className=" col-start-3 col-end-4">
        <TaskCounts title="expired" count={summery.numberofExpireTasks} />
      </div>
      <div className=" col-span-full">
        <ProgressBar />
      </div>
    </div>
  );
}

interface TaskCountsProps {
  title: string;
  count: number;
}
function TaskCounts(props: TaskCountsProps) {
  return (
    <div className=" flex flex-col items-center rounded bg-slate-700 px-1">
      <h1 className=" font-semibold">{props.count}</h1>
      <small className=" text-[.5em] uppercase font-light">{props.title}</small>
    </div>
  );
}

function ProgressBar() {
  const currentHour = new Date().getHours();
  const currentProgessValue = Math.floor((currentHour / 24) * 100);
  console.log(currentProgessValue);
  return (
    <div className="relative w-full h-4 border border-green-200 rounded-full  text-center text-[.6em]">
      <p>Day Passed</p>
      <div
        style={{ width: currentProgessValue + "%" }}
        className="absolute top-0 -z-10 h-full bg-green-500 rounded-full"
      ></div>
    </div>
  );
}
