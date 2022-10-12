import React from "react";
import "./iphone.css";
import Clock from "react-live-clock";
import { Link } from "react-router-dom";
import appBgImg from "../../assets/images/bitcoin.png";

const Iphone = () => {
  return (
    <div class="iphone-x">
      <i id="speaker">Speaker</i>
      <b id="camera">Camera</b>
      <s id="clock">
        <Clock format={"HH:mm:ss"} ticking={true} timezone={"EU/Bucharest"} />
      </s>
      <div class="skyendApp">
        <div id="appBgImg">
          <img src={appBgImg} style={{ width: "100%", height: "100%" }} />
        </div>
        <div class="coinPrice">
          <strong>0.07$</strong>
          <i>/&cent;oin</i>
        </div>
        <div class="dataBlock">
          <div class="balance">
            <strong>Wallet balance</strong>
            <div className="livedata">0</div>
          </div>
          <div class="circSupply">
            <strong>Token in use</strong>
            <div className="livedata">100M</div>
          </div>
          <div class="totalSupply">
            <strong>Total Supply</strong>
            <div className="livedata">1B</div>
          </div>
          <div class="marketCap">
            <strong>Market Capitalization</strong>
            <div className="livedata">7.00M</div>
          </div>
        </div>

        <div class="buyToken">
          <a href="https://app.uniswap.org/#/swap">
            <button>
              <strong>BUY</strong>
            </button>
          </a>
        </div>
      </div>

      <span class="iphbut">Left action button</span>
      <span class="iphbut">Right action button</span>
    </div>
  );
};
export default Iphone;
