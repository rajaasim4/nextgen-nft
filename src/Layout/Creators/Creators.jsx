import React from "react";
import Creator1 from "../../assets/Images/Creator1.png";
import Creator2 from "../../assets/Images/Creator2.png";
import Creator3 from "../../assets/Images/Creator3.png";
import Creator4 from "../../assets/Images/Creator4.png";
import CreatorsCard from "../../Components/CreatorsCard/CreatorsCard";
import "./Creators.scss";
const Creators = () => {
  return (
    <section className="Creators">
      <h2>Top Creators</h2>
      <p>
        In commodo auctor eget congue sit. Ultrices eget pretium sit euismod mi{" "}
        <br /> id. Risus, aliquam odio posuere ac in in nisl sed augue. Porta
        aenean <br /> egestas malesuada in pulvinar enim viverra.
      </p>
      <div className="Creators-main">
        <CreatorsCard imgsrc={Creator1} title={"Loura Chin"} />
        <CreatorsCard imgsrc={Creator2} title={"Kelvin Glan"} />
        <CreatorsCard imgsrc={Creator3} title={"Glam Lee"} />
        <CreatorsCard imgsrc={Creator4} title={"Alameda"} />
      </div>
    </section>
  );
};

export default Creators;
