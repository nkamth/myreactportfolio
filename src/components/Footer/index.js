import React from "react";
import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <a
          href="https://github.com/nkamth"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../assets/logos/github-logo.png")}
            alt="Github"
            className="logo"
          ></img>
        </a>
      </div>
      <div>
        <a
          href="mailto: namitha.289@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../assets/logos/email-logo.png")}
            alt="Email"
            className="logo"
          ></img>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
