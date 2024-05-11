import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import styled from "styled-components";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

const test = styled.div`
  background-color: pink;;;
`