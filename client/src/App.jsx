import Navbar from "./components/Navbar";
//import { Outlet } from "react-router-dom";
import Section from "./components/Section";

function App() {
  return (
    <>
      <h1>Utah Real Estate Law</h1>
      <Navbar></Navbar>
      <Section />
      {/* <Outlet /> */}
    </>
  );
}

export default App;
