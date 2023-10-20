import { createContext, useContext, useState, useEffect } from "react";
import { DayDivision } from "../assets/types";
import getTimeofDay from "../assets/getTimeofDay";

const TimeContext = createContext<DayDivision>("night");
export const useTime = () => useContext(TimeContext);

interface Children {
  children: React.ReactNode;
}

export default function TimeProvider(prop: Children) {
  const [currentTimeofDay, setCurrentTimeofDay] =
    useState<DayDivision>("night");
  useEffect(() => {
    setCurrentTimeofDay(getTimeofDay());
  }, []);
  return (
    <TimeContext.Provider value={currentTimeofDay}>
      {prop.children}
    </TimeContext.Provider>
  );
}
