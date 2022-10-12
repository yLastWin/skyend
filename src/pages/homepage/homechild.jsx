import React from "react";
import { useState, useEffect, useRef } from "react";
import Moon from "../../components/moon/moon.jsx";
import Iphone from "../../components/iphone/iphone.jsx";
import Sinfo from "../../components/shortDescribe.jsx/shortDescribe.jsx";
import "./homechild.css";
const Homechild = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 0;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom && window.innerWidth < 1000) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  return (
    <div>
      <div className="compContainer">
        {isVisible && (
          <div id="hide" className="moonContainer">
            <Moon />
            <div className="sinfo">
              <Sinfo />
            </div>
          </div>
        )}

        <div className="iphoneContainer">
          <Iphone />
        </div>
      </div>
    </div>
  );
};

export default Homechild;
