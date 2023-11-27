import React from "react";

function Footer() {
  return (
    <div className="footerContainer">
    <footer className={"footer"}>
       <div className = "icons">
      <a href="https://github.com/Jelu113" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github fa-2xl"></i>
      </a>&nbsp;&nbsp;&nbsp;
      <a className = "icons"href="mailto: luthijenae@gmail.com">
        <i className="fa-solid fa-envelope fa-2xl"></i>
      </a>&nbsp;&nbsp;&nbsp;
      <a
        href="https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin fa-2xl"></i>
      </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Jenae Luthi</p>
    </footer>
    </div>
  );
}

export default Footer;
