import { createBrowserRouter } from "react-router-dom";

import Community from "./pages/Community/Community";
import Home from "./pages/Home/Home";
import Recruit from "./pages/Recruit/Recruit";
import Search from "./pages/Search/Search";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/community",
    element: <Community />,
  },
  {
    path: "/recruit",
    element: <Recruit />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);
