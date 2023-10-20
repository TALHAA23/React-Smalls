import { ChangeEvent } from "react";
import { DayDivision, Task as TaskInterface } from "../assets/types";
import { useReducerProvider } from "../hook/ReducerProvider";

export default function Task(props: TaskInterface) {
  const dispatch = useReducerProvider()?.dispatch;

  function toggleTask(event: ChangeEvent<HTMLInputElement>) {
    dispatch?.({
      type: "toggle",
      payLoad: {
        timeofDay: event.target.name as DayDivision,
        id: event.target.id,
      },
    });
  }

  return (
    <div>
      <div className="flex items-center group shadow-lg">
        <input
          checked={props.status == "complete" ? true : false}
          onChange={(e) => toggleTask(e)}
          type="checkbox"
          id={props.id}
          name={props.timeofDay}
          className="peer mr-6"
          hidden
        />
        <div
          className={`w-2 aspect-square rounded-full bg-orange-400 mr-3 peer-checked:bg-green-400 ${
            props.status == "expired" && "bg-red-400"
          }`}
        ></div>
        <label
          htmlFor={props.id}
          className=" text-xs flex items-center select-none grow"
        >
          <div className="relative">
            <p className={`${props.status == "expired" && "text-red-500"}`}>
              {props.title.toString()}
            </p>
            <div
              className={`absolute w-full h-[1px] top-1/2 bg-slate-700 origin-left transition-transform duration-150 ${
                props.status == "complete" ? "scale-x-100" : "scale-x-0"
              }`}
            ></div>
          </div>
        </label>
        <div className="justify-end rounded-full bg-slate-500 px-2 invisible group-hover:visible">
          <img className=" scale-75" src={`/${props.taskLabel}.svg`} alt="" />
        </div>
      </div>
      <div className="w-full h-[2px] bg-slate-800 mx-auto"></div>
    </div>
  );
}
