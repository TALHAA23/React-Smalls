import TicTacToe from "./TicTactoe";
import MatchMaking from "./components/MatchMaking";
import PlayGroundAttributesProvider from "./hooks/PlayGroundAttributesProvider";
import PlayBoard from "./components/PlayBoard";
import TurnAndToggleProvier from "./hooks/TurnAndToggleProvider";
import WinnerProvider from "./hooks/WinnerProvider";
import Shop from "./components/Shop";
import { useRoutes } from "react-router-dom";
export default function TicTacToeRoutes() {
  return useRoutes([
    { path: "*", element: <h1>Page not found🤔</h1> },
    {
      path: "/",
      children: [
        {
          index: true,
          element: <TicTacToe />,
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
  ]);
}
