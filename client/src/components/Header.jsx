import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <h1 className ="title">Utah Real Estate Administrative Rule</h1>
      <p className = "subtitle">by keyword</p>
      <nav>
        <Navbar/>
      </nav>
    </header>
  );
}

export default Header;
