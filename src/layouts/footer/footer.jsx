import React from "react";
import "./footer.css";
import SocialButton from "../../components/socialButton/socialButton.jsx";
import twitterIcon from "../../assets/images/twitterIcon.png";
import telegramIcon from "../../assets/images/telegramIcon.png";
import redditIcon from "../../assets/images/redditIcon.png";
import discordIcon from "../../assets/images/discordIcon.png";
const Footer = () => {
  return (
    <footer>
      <div class="footer-container">
        <ul class="social_links">
          <li>
            <SocialButton
              href={"https://twitter.com/"}
              imgsrc={twitterIcon}
              height={"30px"}
              width={"30px"}
            />
          </li>
          <li>
            <SocialButton
              href={"https://web.telegram.org/z/"}
              imgsrc={telegramIcon}
              height={"30px"}
              width={"30px"}
            />
          </li>
          <li>
            <SocialButton
              href={"https://www.reddit.com/"}
              imgsrc={redditIcon}
              height={"30px"}
              width={"30px"}
            />
          </li>
          <li>
            <SocialButton
              href={"https://discord.com/"}
              imgsrc={discordIcon}
              height={"30px"}
              width={"30px"}
            />
          </li>
        </ul>
        <i>&#169; Iulian Developer Studio 2022</i>
      </div>
    </footer>
  );
};

export default Footer;
