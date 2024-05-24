import { Outlet } from "react-router-dom";

import Header from "./components/common/Header";
import TopNav from "./components/common/TopNav";

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
