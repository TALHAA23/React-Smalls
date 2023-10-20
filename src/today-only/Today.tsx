import DayManager from "./components/DayManager";
import Wave from "./components/Wave";
import Sun from "./components/Sun";
import UIColorsProvider from "./hook/UIColorsProvider";
import Create from "./components/Create";
import ReducerProvider from "./hook/ReducerProvider";
import Summery from "./components/Summary";
export default function Today() {
  return (
    <div
      className={`relative w-full h-screen text-white border border-black font-[poppins] bg-slate-900 `}
    >
      <ReducerProvider>
        <DayManager />
        <Create />
        <Summery />
      </ReducerProvider>
      <UIColorsProvider>
        <Wave />
        <Sun />
      </UIColorsProvider>
    </div>
  );
}
