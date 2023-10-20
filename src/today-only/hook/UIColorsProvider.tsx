import { createContext, useContext, useState, useEffect } from "react";
import { SkyColor, SunMoon, WaveColor } from "../assets/types";
import { useTime } from "./TimeProvider";
import getWaveColor from "../assets/getWaveColor";
import getSunColor from "../assets/getSunColor";
import getSkyColor from "../assets/getSkyColor";

interface UIColor {
  skyColor: SkyColor;
  sunColor: SunMoon;
  waveColor: WaveColor;
}

const UIColorContext = createContext<UIColor | null>(null);
export const useUIColors = () => useContext(UIColorContext);
interface Children {
  children: React.ReactNode;
}
export default function (props: Children) {
  const timeofDay = useTime();
  const [waveColor, setWaveColor] = useState<WaveColor>("#000b76");
  const [sunColor, setSunColor] = useState<SunMoon>(["#E3E0E0", "#AAA9A7"]);
  const [skyColor, setSkyColor] = useState<SkyColor>("bg-slate-900");

  useEffect(() => {
    setWaveColor(getWaveColor(timeofDay));
    setSunColor(getSunColor(timeofDay));
    setSkyColor(getSkyColor(timeofDay));
  }, [timeofDay]);

  return (
    <UIColorContext.Provider value={{ skyColor, waveColor, sunColor }}>
      {props.children}
    </UIColorContext.Provider>
  );
}
