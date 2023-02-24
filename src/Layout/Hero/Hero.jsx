import React from "react";
import Brand1 from "../../assets/Images/Brand1.png";
import Brand2 from "../../assets/Images/Brand2.png";
import Brand3 from "../../assets/Images/Brand3.png";
import Brand4 from "../../assets/Images/Brand4.png";
import Brand5 from "../../assets/Images/Brand5.png";
import Hero_img from "../../assets/Images/Hero.png";
import "./Hero.scss";
const Hero = () => {
  return (
    <section className="Hero">
      <div className="Blur-effect"></div>
      <div className="Hero-main">
        <div className="Hero-left">
          <h1>
            Best NFTs <br /> Marketplace
          </h1>
          <p>
            Ultrices eget pretium sit euismod mi id. In commodo auctor eget
            congue sit. Risus, aliquam odio posuere ac in in nisl sed augue.
            Porta aenean egestas malesuada in pulvinar enim viverra.
          </p>
          <div className="Hero-btns">
            <button>Get Started</button>
            <button>Create NFT's</button>
          </div>
        </div>
        <div className="Hero-right">
          <img src={Hero_img} alt="" />
        </div>
      </div>
      <div className="Brands">
        <div className="Brands-track">
          <div className="Brands-img">
            <img src={Brand1} alt="" />
          </div>
          <div className="Brands-img">
            <img src={Brand2} alt="" />
          </div>
          <div className="Brands-img">
            <img src={Brand3} alt="" />
          </div>
          <div className="Brands-img">
            <img src={Brand4} alt="" />
          </div>
          <div className="Brands-img">
            <img src={Brand5} alt="" />
          </div>
          <div className="Brands-img">
            <img src={Brand1} alt="" />
          </div>
          <div className="Brands-img">
            <img src={Brand2} alt="" />
          </div>
          <div className="Brands-img">
            <img src={Brand3} alt="" />
          </div>
          <div className="Brands-img">
            <img src={Brand4} alt="" />
          </div>
          <div className="Brands-img">
            <img src={Brand5} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
