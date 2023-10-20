import { createContext, useContext, useReducer, useState } from "react";

interface MyProps {
  name: string;
}

// useContext
type Theme = "light" | "dark"; //aliases type
interface ThemeContext {
  //interface type
  theme: Theme;
  toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContext>({
  theme: "light",
  toggleTheme: () => {},
});
const useTheme = () => useContext(ThemeContext);
//

// useReduceer
type Action =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number }
  | { type: "reset" };

function reducer(state: number, action: Action) {
  switch (action.type) {
    case "increment":
      return state + action.payload;
    case "decrement":
      return state + action.payload;
    case "reset":
      return 0;
    default:
      throw new Error("Invalud Action");
  }
}
export default function Greeting(props: MyProps) {
  // const [count, setCount] = useState<MyProps>({name:"taljha"}); //generic way
  const [count, setCount] = useState(0); //infere way
  const [theme, setTheme] = useState<Theme>("light");
  const [state, dispatch] = useReducer(reducer, 0);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"));
  }
  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <h1>
          Hello {props.name} Your count is {count}
        </h1>
        <button onClick={() => setCount((prev) => prev + 1)}>Count</button>
        <button onClick={toggleTheme}>theme</button>
      </ThemeContext.Provider>
      <div>
        <h1>counter: {state}</h1>
        <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
          +
        </button>
        <br />
        <button onClick={() => dispatch({ type: "decrement", payload: -1 })}>
          -
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}
