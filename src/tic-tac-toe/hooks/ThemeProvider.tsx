import {
  ReactElement,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import Circle from "../shop/Marker/Circle";
import { Catagory } from "../assets/type";
import myTheme from "../assets/myTheme";

type Key = Catagory;
type Value = string | ReactElement[];

interface Theme {
  themeChanger?: (key: Key, value: Value) => void;
  board: string;
  marker: ReactElement[];
}

let DEFAULT_THEME: Theme;
DEFAULT_THEME = myTheme() || {
  themeChanger: () => {},
  board: "border-4 border-black",
  marker: [...Circle()],
};

const ThemeContext = createContext<Theme>(DEFAULT_THEME);
export const useThemeChanger = () => useContext(ThemeContext).themeChanger;
export const useBoardTheme = () => useContext(ThemeContext).board;
export const useMarkerTheme = () => useContext(ThemeContext).marker;
export default function ThemeProvider(props: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>({
    ...DEFAULT_THEME,
    themeChanger: changeCurrentTheme,
  });

  useEffect(
    () => localStorage.setItem("theme", JSON.stringify(theme)),
    [theme]
  );

  function changeCurrentTheme(key: Key, value: Value) {
    setTheme((prevTheme) => ({
      ...prevTheme,
      [key]: value,
    }));
  }

  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  );
}
