import React from "react";
import Navigation from "../Navigation";
import "./headerStyle.css";
const Header = (props) => {
  const { currentTab, setCurrentTab } = props;
  const { headerName } = "Namitha";

  return (
    <header style={{ background: "black", color: "orange" }}>
      <div>
        <h2>{headerName}</h2>
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
