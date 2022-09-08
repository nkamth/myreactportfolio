import React from "react";
import Navigation from "../Navigation";
import "./header.css";
const Header = (props) => {
  const { currentTab, setCurrentTab } = props;

  return (
    <header>
      <div>
        <h2>Namitha's React Portfolio</h2>
      </div>
      <div>
        <Navigation
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        ></Navigation>
      </div>
    </header>
  );
};

export default Header;
