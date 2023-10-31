// movie-for-me
import MovieForMe from "./movie-for-me/MovieForMe";
// today-only
import Today from "./today-only/Today";
import TimeProvider from "./today-only/hook/TimeProvider";
// trash
import TS from "./ts-with-react/TS";
// tic-tac-toe
import TicTacToe from "./tic-tac-toe/TicTactoe";
import MatchMaking from "./tic-tac-toe/components/MatchMaking";
import PlayGroundAttributesProvider from "./tic-tac-toe/hooks/PlayGroundAttributesProvider";
import PlayBoard from "./tic-tac-toe/components/PlayBoard";
import TurnAndToggleProvier from "./tic-tac-toe/hooks/TurnAndToggleProvider";
import WinnerProvider from "./tic-tac-toe/hooks/WinnerProvider";
import ThemeProvider from "./tic-tac-toe/hooks/ThemeProvider";
import Shop from "./tic-tac-toe/components/Shop";
import { useRoutes } from "react-router-dom";
export const myModules = [
  { path: "movie-for-me", element: <MovieForMe /> },
  { path: "ts", element: <TS name="talha" /> },
  {
    path: "today-only",
    element: (
      <TimeProvider>
        <Today />
      </TimeProvider>
    ),
  },
];
