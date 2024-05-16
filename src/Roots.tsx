import { Outlet } from "react-router-dom";

import Header from "./components/common/Header/Header";
import TopNav from "./components/common/TopNav/TopNav";

function Roots() {
  return (
    <>
      <Header />
      <TopNav />
      <Outlet />
    </>
  );
}

export default Roots;
