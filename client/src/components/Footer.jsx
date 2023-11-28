import React from "react";

function Footer() {
  return (
    <div className="footerContainer">
      <footer className={"footer"}>
        <div className="contentWrapper">
          <div className="footerLinksContainer">
            <a
              className="footerLinks"
              href="https://le.utah.gov/xcode/Title61/Chapter2F/61-2f.html?v=C61-2f_1800010118000101"
              target="_blank"
              rel="noreferrer"
            >
             <p className= "linkStyle"> Utah State Legislature Real Estate Code</p>
            </a>
            <a
              className="footerLinks"
              href="https://adminrules.utah.gov/public/rule/R162-2f/Current%20Rules"
              target="_blank"
              rel="noreferrer"
            >
              <p className= "linkStyle">Utah Real Estate Administrative Rules</p>
            </a>
            <a
              className="footerLinks"
              href="https://realestate.utah.gov/"
              target="_blank"
              rel="noreferrer"
            >
              <p className= "linkStyle">Utah Division of Real Estate</p>
            </a>
          </div>
          <div className="centeredText">
            <p className= "date">
              &copy; {new Date().getFullYear()} Jenae Luthi, Salvador Mejia, JJ
              Saoit, Jon Bay
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

