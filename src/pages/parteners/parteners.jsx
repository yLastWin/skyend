import React from "react";

import Header from "../../layouts/header/header.jsx";
import Main from "../../layouts/main/main.jsx";
import Footer from "../../layouts/footer/footer.jsx";
import partenersLogo from "../../components/data/parteners.json";
import "./parteners.css";
const Parteners = () => {
  const OurParteners = () => {
    return (
      <div className="OurParteners">
        <h2>Parteners and Investors</h2>

        <div id="partenersContainer">
          {partenersLogo.map((logo) => (
            <div className="partenersLogo">
              <img
                src={logo.url}
                alt={logo.alt}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div>
      <Header />
      <Main dynamicComponent={OurParteners()} />

      <Footer />
    </div>
  );
};

export default Parteners;
