import React from "react";
import Avatar1 from "../../assets/Images/Avatar1.png";
import "./SliderCard.scss";

const SliderCard = (props) => {
  return (
    <section className="SliderCard">
      <div
        className="SliderCard-bg"
        style={{ backgroundImage: `url(${props.bgimg})` }}
      ></div>
      <div className="SliderCard-top-content">
        <div className="Slider-details">
          <span>Lightning Axe</span>
          <span>0.36ETH</span>
        </div>
        <p>
          <img src={Avatar1} alt="" />
          Loura Chin
        </p>
        <button>Place A Bid</button>
      </div>
    </section>
  );
};

export default SliderCard;
