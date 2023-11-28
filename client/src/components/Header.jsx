import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <h1 className ={"title"}>Utah Admin rules</h1>
      <nav>
        <Navbar/>
      </nav>
    </header>
  );
}

export default Header;
