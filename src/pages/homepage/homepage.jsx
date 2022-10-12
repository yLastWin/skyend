import React from "react";
// import { useState, useEffect, useRef } from "react";
import Header from "../../layouts/header/header.jsx";
import Main from "../../layouts/main/main.jsx";
import Footer from "../../layouts/footer/footer.jsx";
import Homechild from "./homechild.jsx";

// import Starfield from "../../components/starfield/Starfield.jsx";
const Homepage = () => {
  return (
    <div>
      <Header />

      <Main dynamicComponent={<Homechild />} />

      <Footer />
    </div>
  );
};

export default Homepage;
