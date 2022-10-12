import React from "react";

import ReactDOM from "react-dom";

import Header from "../../layouts/header/header.jsx";
import Main from "../../layouts/main/main.jsx";
import Footer from "../../layouts/footer/footer.jsx";
import "./distribution.css";
import areaChart from "../../assets/images/tokendistribution.jpg";

const Distribution = () => {
  const DistributionApp = () => {
    return (
      <div className="chartContainer">
        <h2>TOKEN DISTRIBUTION</h2>
        <img src={areaChart} />
      </div>
    );
  };

  return (
    <div>
      <Header />
      <Main dynamicComponent={DistributionApp()} />

      <Footer />
    </div>
  );
};

export default Distribution;
