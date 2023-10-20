import MovieForMe from "./movie-for-me/MovieForMe";
import Today from "./today-only/Today";
import TimeProvider from "./today-only/hook/TimeProvider";
import TS from "./ts-with-react/TS";
import TicTacToe from "./tic-tac-toe/TicTactoe";
import MatchMaking from "./tic-tac-toe/components/MatchMaking";
import PlayGroundAttributesProvider from "./tic-tac-toe/hooks/PlayGroundAttributes";
import PlayBoard from "./tic-tac-toe/components/PlayBoard";
import TurnAndToggleProvier from "./tic-tac-toe/hooks/TurnAndToggleProvider";
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
  {
    path: "tic-tac-toe",
    children: [
      { index: true, element: <TicTacToe /> },
      {
        path: "matchmaking",

        children: [
          {
            index: true,
            element: (
              <PlayGroundAttributesProvider>
                <MatchMaking />
              </PlayGroundAttributesProvider>
            ),
          },
          {
            path: "play",
            element: (
              <PlayGroundAttributesProvider>
                <TurnAndToggleProvier>
                  <PlayBoard />
                </TurnAndToggleProvier>
              </PlayGroundAttributesProvider>
            ),
          },
        ],
      },
    ],
  },
];
