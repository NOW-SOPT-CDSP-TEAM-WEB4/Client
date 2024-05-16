import { createBrowserRouter } from "react-router-dom";

import TopNav from "./components/common/topNav/TopNav";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <TopNav />,
    children: [
      //   {
      //     path: "/1",
      //     element: <Page1 />,
      //   },
      //   {
      //     path: "/2",
      //     element: <Page2 />,
      //   },
      //   {
      //     path: "/3",
      //     element: <Page3 />,
      //   },
      //   ...
    ],
  },
]);
