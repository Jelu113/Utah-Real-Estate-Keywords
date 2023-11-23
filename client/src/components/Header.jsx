import React from "react";
import NavBar from "./Navbar";

function Header(props) {
  return (
    <header>
      <h1 className={"title"}>Utah Admin rules</h1>
      <nav>
        <NavBar
          currentPage={props.currentPage}
          setCurrentPage={props.setCurrentPage}
        />
      </nav>
    </header>
  );
}

export default Header;