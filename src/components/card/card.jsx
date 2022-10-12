import React from "react";
import "./card.css";
const Card = (props) => {
  return (
    <div className="cardPeople">
      <img
        src={props.imgsrc}
        alt="Avatar"
        style={{ height: "200px", width: "100%" }}
      />
      <div className="cardInfo">
        <h4>
          <b>{props.cname}</b>
        </h4>
        <p>{props.position}</p>
      </div>
    </div>
  );
};

export default Card;
