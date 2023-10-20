import DayManager__Header from "./DayManager__Header";
import TaskContainer from "./TaskContainer";
export default function DayManager() {
  return (
    <div className="absolute z-20 w-full max-w-[600px] md:w-1/2 h-full rounded shadow-inner shadow-slate-800 hover:bg-black/80 transition-colors duration-1000 grid auto-rows-[5%_95%]">
      <DayManager__Header />
      <TaskContainer />
    </div>
  );
}
