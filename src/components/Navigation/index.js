import React from "react";
import "./nav.css";

const Navigation = (props) => {
  const { currentTab, setCurrentTab } = props;

  return (
    <nav>
      <div>
        <h2>Namitha React Porfolio</h2>
      </div>
      <div>
        <ul className="flex-row mobile-view">
          <li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
            <span onClick={() => setCurrentTab("about")}>About Me</span>
          </li>
          <li className={currentTab === "portfolio" ? "mx-2 navActive" : "mx-2"}>
            <span onClick={() => setCurrentTab("portfolio")}>Projects</span>
          </li>
          <li className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}>
            <span onClick={() => setCurrentTab("contact")}>Contact</span>
          </li>
          <li className={currentTab === "resume" ? "mx-2 navActive" : "mx-2"}>
            <span onClick={() => setCurrentTab("resume")}>Resume</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
