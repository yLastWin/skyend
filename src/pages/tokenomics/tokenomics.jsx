import React from "react";

import Header from "../../layouts/header/header.jsx";
import Main from "../../layouts/main/main.jsx";
import Footer from "../../layouts/footer/footer.jsx";
import "./tokenomics.css";
const Tokenomics = () => {
  const TokenomicsApp = () => {
    return (
      <div className="tokenomicsApp">
        <h2 id="tokenomicsTitle">TOKENOMICS</h2>
        <figure class="pie-chart">
          <h3>Tokenomics of skyend </h3>
          <figcaption>
            Public Sale 45<span style={{ color: "#4e79a7" }}></span>
            <br></br>
            Angel Round 15<span style={{ color: "#f28e2c" }}></span>
            <br></br>
            Marketing 15<span style={{ color: "#e15759" }}></span>
            <br></br>
            Reserve 10<span style={{ color: "#76b7b2" }}></span>
            <br></br>
            Team 10<span style={{ color: "#59a14f" }}></span>
            <br></br>
            Airdrop 5<span style={{ color: "#edc949" }}></span>
          </figcaption>
          <cite>skyend</cite>
        </figure>
        <div id="tokenomicsInfo" className="sweep-top">
          <p>
            Tokenomics is an economic model based on the token or coin of a
            project. The main aspects of tokenomics include: how the token is
            first distributed in the market, how it continues to be distributed
            over the long term and the use cases of the token. Some tokenomics
            may also involve the ‘burning’ of tokens to reduce their inflation.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <Main dynamicComponent={TokenomicsApp()} />

      <Footer />
    </div>
  );
};

export default Tokenomics;
