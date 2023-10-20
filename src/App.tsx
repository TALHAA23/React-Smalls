import { useRoutes, Link } from "react-router-dom";
import { myModules } from "./modules";

export default function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Link to="/movie-for-me">Movies</Link>,
    },
    ...myModules,
  ]);
  return routes;
}
