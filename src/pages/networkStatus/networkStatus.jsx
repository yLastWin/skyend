import React from "react";

import Header from "../../layouts/header/header.jsx";
import Main from "../../layouts/main/main.jsx";
import Footer from "../../layouts/footer/footer.jsx";
import "./networkStatus.css";
import SolarSystem from "../../components/solarSystem/solarSystem.jsx";

const NetworkStatus = () => {
  const networkApp = () => {
    return (
      <div className="networkApp">
        <div id="offlineStatus">
          Status: ONLINE <span>&#128994;</span>
        </div>
        <div id="solarContainer">
          <SolarSystem />
        </div>
        <div id="hoverSun">
          <h3>HOVER TO DISCOVER</h3>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <Main dynamicComponent={networkApp()} />

      <Footer />
    </div>
  );
};

export default NetworkStatus;
