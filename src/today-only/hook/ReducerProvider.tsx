import { createContext, useContext, useEffect, useReducer } from "react";
import { DayDivision, Task } from "../assets/types";
import autoToggleTasks from "../assets/autoToggleTasks";
import areNotYesterdayTask from "../assets/areNotYesterdayTasks";

type Payload = Task | MyTasks | { timeofDay: DayDivision; id: string };
type Action =
  | { type: "add"; payLoad: Payload }
  | { type: "toggle"; payLoad: Payload }
  | { type: "delete"; payLoad: Payload }
  | { type: "refresh"; payLoad: Payload };
interface ReducerProvider {
  tasks: MyTasks;
  dispatch: (action: Action) => void;
}
export interface MyTasks {
  lastUpdatetoLocalStorage: string | null;
  list: { morning: Task[]; afternoon: Task[]; evening: Task[]; night: Task[] };
}

interface Children {
  children: React.ReactNode;
}

const ReducerContext = createContext<ReducerProvider | null>(null);
export const useReducerProvider = () => useContext(ReducerContext);

function reducer(state: MyTasks, action: Action): MyTasks {
  let key: DayDivision | null = null;
  if ("timeofDay" in action.payLoad) key = action.payLoad.timeofDay;
  switch (action.type) {
    case "add":
      if (!key) throw new Error("Updating feild require key but key is null");
      return {
        lastUpdatetoLocalStorage: state.lastUpdatetoLocalStorage,
        list: { ...state.list, [key]: [...state.list[key], action.payLoad] },
      };
    case "toggle":
      if (!key) throw new Error("Updating feild require key but key is null");
      const toggledField = state.list[key].map((field) => {
        if (!("id" in action.payLoad))
          //type gurding
          throw new Error("Payload has not property id");
        return field.id == action.payLoad.id
          ? {
              ...field,
              status: field.status == "complete" ? "pending" : "complete",
            }
          : field;
      });
      return {
        lastUpdatetoLocalStorage: state.lastUpdatetoLocalStorage,
        list: { ...state.list, [key]: toggledField },
      };
    case "refresh":
      return action.payLoad;
  }
  return state;
}
const readTaskFromLocalStorage = localStorage.getItem("myTasks");
const initialState: MyTasks = (areNotYesterdayTask() &&
  readTaskFromLocalStorage &&
  JSON.parse(readTaskFromLocalStorage)) || {
  lastUpdatetoLocalStorage: null,
  list: { morning: [], afternoon: [], evening: [], night: [] },
};
export default function ReducerProvider(props: Children) {
  const REFRESH_INTERVAL = 10 * 10000;
  const [myTasks, dispatch] = useReducer(reducer, initialState);
  function createDispatch(action: Action) {
    dispatch({ type: action.type, payLoad: action.payLoad });
  }

  useEffect(() => {
    const intervalID = setInterval(() => {
      dispatch({ type: "refresh", payLoad: autoToggleTasks(myTasks) });
    }, REFRESH_INTERVAL);
    localStorage.setItem(
      "myTasks",
      JSON.stringify({
        ...myTasks,
        lastUpdatetoLocalStorage: Date().toString(),
      })
    );

    return () => clearInterval(intervalID);
  }, [myTasks]);

  return (
    <ReducerContext.Provider
      value={{ tasks: myTasks, dispatch: createDispatch }}
    >
      {props.children}
    </ReducerContext.Provider>
  );
}
