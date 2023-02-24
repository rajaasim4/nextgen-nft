import React from "react";
import "./CollectionCard.scss";
const CollectionCard = (props) => {
  return (
    <div className="CollectionCard">
      <div className="Collection-content">
        <img src={props.img} alt="" />
        <h4>Broken Collection</h4>
        <a>View Collection</a>
      </div>
    </div>
  );
};

export default CollectionCard;
