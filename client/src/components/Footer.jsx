import React from "react";

function Footer() {
  return (
    <div className="footerContainer">
    <footer className={"footer"}>
       <div className = "icons">
      
      <a className="footerLinks"
        href="https://le.utah.gov/xcode/Title61/Chapter2F/61-2f.html?v=C61-2f_1800010118000101"
        target="_blank"
        rel="noreferrer"
       > Utah State Legislature Real Estate Code
      </a> <br></br>
      <a className="footerLinks"
        href="https://adminrules.utah.gov/public/rule/R162-2f/Current%20Rules"
        target="_blank"
        rel="noreferrer"
       > Complete Utah Administrative Rules
      </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Jenae Luthi, Salvador Mejia, JJ Saoit, Jon Bay</p>
    </footer>
    </div>
  );
}

export default Footer;
