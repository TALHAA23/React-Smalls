import MovieForMe from "./movie-for-me/MovieForMe";
import Today from "./today-only/Today";
import TimeProvider from "./today-only/hook/TimeProvider";
import TS from "./ts-with-react/TS";
import TicTacToe from "./tic-tac-toe/TicTactoe";
import MatchMaking from "./tic-tac-toe/components/MatchMaking";
import PlayGroundAttributesProvider from "./tic-tac-toe/hooks/PlayGroundAttributesProvider";
import PlayBoard from "./tic-tac-toe/components/PlayBoard";
import TurnAndToggleProvier from "./tic-tac-toe/hooks/TurnAndToggleProvider";
import WinnerProvider from "./tic-tac-toe/hooks/WinnerProvider";
import ThemeProvider from "./tic-tac-toe/hooks/ThemeProvider";
import Shop from "./tic-tac-toe/components/Shop";
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
      {
        index: true,
        element: (
          <ThemeProvider>
            <TicTacToe />
          </ThemeProvider>
        ),
      },
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
                  <WinnerProvider>
                    <PlayBoard />
                  </WinnerProvider>
                </TurnAndToggleProvier>
              </PlayGroundAttributesProvider>
            ),
          },
        ],
      },
      {
        path: "shop",
        element: <Shop />,
      },
    ],
  },
];
