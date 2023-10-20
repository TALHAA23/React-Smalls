import { MyTasks } from "../hook/ReducerProvider";

interface NumberofCompleteAndExpire {
  totalNumberofTasks: number;
  numberofCompeleteTasks: number;
  numberofExpireTasks: number;
}

export default function getSummery(
  taskList: MyTasks
): NumberofCompleteAndExpire {
  const list = taskList.list;
  let totalNumberofTasks = 0;
  let numberofCompeleteTasks = 0;
  let numberofExpireTasks = 0;
  const listToArray = Object.entries(list);
  listToArray.map((item) => {
    totalNumberofTasks += item[1].length;
    item[1].map((task) => {
      if (task.status == "complete") numberofCompeleteTasks += 1;
      else if (task.status == "expired") numberofExpireTasks += 1;
      else return 0;
    });
  });
  return {
    totalNumberofTasks,
    numberofCompeleteTasks,
    numberofExpireTasks,
  };
}
