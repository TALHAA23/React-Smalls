import { MyTasks } from "../hook/ReducerProvider";
import { hourDivison } from "./getTimeofDay";
import { DayDivision, Task } from "./types";

export default function autoToggleTasks(myTasks: MyTasks): MyTasks {
  let currentHour = new Date().getHours();
  const { morning, afternoon, evening } = hourDivison;
  if (currentHour < morning.end) return myTasks;
  else if (currentHour >= evening.end)
    return updatedTaskList(myTasks, ["morning", "afternoon", "evening"]);
  else if (currentHour >= afternoon.end)
    return updatedTaskList(myTasks, ["morning", "afternoon"]);
  else if (currentHour >= morning.end)
    return updatedTaskList(myTasks, ["morning"]);
  else throw new Error("Hour is not handled");
}

function markTaskAccordingly(tasks: Task[]): Task[] {
  const toggled = tasks.map((task) => {
    if (task.taskLabel == "routine") return { ...task, status: "complete" };
    else if (task.taskLabel == "unusual")
      return {
        ...task,
        status: task.status == "complete" ? task.status : "expired",
      };
    else return task;
  });
  return toggled;
}

function updatedTaskList(
  existingList: MyTasks,
  keyForFeildtoUpdate: DayDivision[]
): MyTasks {
  let newListing = { ...existingList.list };
  for (let key of keyForFeildtoUpdate) {
    newListing[key] = markTaskAccordingly(existingList.list[key]);
  }

  return {
    lastUpdatetoLocalStorage: existingList.lastUpdatetoLocalStorage,
    list: { ...newListing },
  };
}
