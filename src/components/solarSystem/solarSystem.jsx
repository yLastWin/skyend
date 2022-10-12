import React from "react";

import "./solarSystem.css";
// created with
// https://codepen.io/Turqueso/pen/PoWJWr
const SolarSystem = () => {
  return (
    <div id="solarSystem">
      {/*  Right below is an image of the sun  */}
      <div id="sun">
        <div>325811</div>
        <div className="legend">
          <i>Legend:</i>
          &#127774;-Block Height <br />
          &#127758;-Transactions <br />
          &#127769;-Block time
        </div>
      </div>
      {/*  Insert the 'earth' on the next line  */}
      <div id="earth-orbit">
        <div id="earth">
          <div>12899913</div>
        </div>
        <div id="moon-orbit">
          <div id="moon">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarSystem;
