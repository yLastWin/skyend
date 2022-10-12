import React from "react";

const SocialButton = ({ href, imgsrc, height, width }) => {
  return (
    <div>
      <a href={href}>
        <img src={imgsrc} alt="social_button" height={height} width={width} />
      </a>
    </div>
  );
};

export default SocialButton;
