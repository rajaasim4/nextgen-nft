import React from "react";
import Collection1 from "../../assets/Images/Collection1.png";
import Collection2 from "../../assets/Images/Collection2.png";
import Collection3 from "../../assets/Images/Collection3.png";
import Collection4 from "../../assets/Images/Collection4.png";
import CollectionCard from "../../Components/CollectionCard/CollectionCard";
import "./Collection.scss";
const Collection = () => {
  return (
    <section className="Collection">
      <h2>NFTs COLLECTIONS</h2>
      <p>
        Ultrices eget pretium sit euismod mi id posuere ac in in nisl sed augue.
      </p>
      <div className="Collection-main">
        <CollectionCard img={Collection1} />
        <CollectionCard img={Collection2} />
        <CollectionCard img={Collection3} />
        <CollectionCard img={Collection4} />
      </div>
    </section>
  );
};

export default Collection;
