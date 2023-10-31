import { useRoutes, Link } from "react-router-dom";
import { myModules } from "./modules";
import ThemeProvider from "./tic-tac-toe/hooks/ThemeProvider";
import TicTacToeRoutes from "./tic-tac-toe/TicTacToeRoutes";

export default function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Link to="/movie-for-me">Movies</Link>,
      children: [],
    },
    ...myModules,
    {
      path: "/tic-tac-toe/*",
      element: (
        <ThemeProvider>
          <TicTacToeRoutes />
        </ThemeProvider>
      ),
    },
  ]);
  return routes;
}
