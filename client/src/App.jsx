import Navbar from "./components/Navbar";
//import { Outlet } from "react-router-dom";
import Section from "./components/Section";
import Login2 from "../src/pages/Login2";

function App() {
  return (
    <>
      <h1>Utah Real Estate Law</h1>
      <Navbar></Navbar>
      <Section />
      {/* <Outlet /> */}
      <Login2 />
    </>
  );
}

export default App;
