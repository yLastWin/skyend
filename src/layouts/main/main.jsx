import React from "react";
import stars from "./stars2.png";
import "./main.css";

const Main = (props) => {
  return (
    <div className="forBgColor">
      <div className="mainContainer" style={{ height: {} }}>
        {props.dynamicComponent}
      </div>
    </div>
  );
};

export default Main;
