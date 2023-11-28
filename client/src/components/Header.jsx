import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <div className="header">
        <div className="headerContainer">
          <h1 className="title">Utah Administrative Rule keywords</h1>
        </div>
      </div>
      <nav>
        <Navbar />
      </nav>
    </header>
  );
}

export default Header;
