import { createBrowserRouter } from "react-router-dom";

import Header from "./components/common/Header";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  },
]);
