import React from "react";
import Navigation from "../Navigation";
import "./headerStyle.css";
const Header = (props) => {
  const { currentTab, setCurrentTab } = props;

  return (
    <header>
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
