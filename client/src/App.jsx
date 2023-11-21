import Navbar from "./components/Navbar"
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Utah Real Estate Law</h1>
      <Navbar></Navbar>
      <Outlet />
    </>
  )
}

export default App
