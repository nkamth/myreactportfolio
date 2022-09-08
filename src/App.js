import "./App.css";
import React, { useState } from "react";
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Header from "./components/Navigation";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  const [currentTab, setCurrentTab] = useState("about");

  // This function checks to see which tab is selected and then generates the appropriate tab.
  const renderTab = () => {
    switch (currentTab) {
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      default:
        return null;
    }
  };
  return (
    <div>
      <div className="mobile-header">
        <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
      </div>
      <div>
        <main>{renderTab()}</main>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
