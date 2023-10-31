import {
  ReactElement,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import Circle from "../shop/Marker/Circle";

type Key = "board" | "marker";
type Value = string | ReactElement;

interface Theme {
  themeChanger: (key: Key, value: Value) => void;
  board: string;
  marker: ReactElement[];
}

const DEFAULT_THEME: Theme = {
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
  console.log(theme);

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
