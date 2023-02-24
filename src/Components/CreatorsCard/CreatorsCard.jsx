import React from "react";
import "./CreatorsCard.scss";
const CreatorsCard = (props) => {
  return (
    <div className="CreatorsCard">
      <div className="Creators-content">
        <img src={props.imgsrc} alt="" />
        <h4>{props.title}</h4>
        <button>View Details</button>
      </div>
      <div className="CreatorsCard-bg"></div>
    </div>
  );
};

export default CreatorsCard;
