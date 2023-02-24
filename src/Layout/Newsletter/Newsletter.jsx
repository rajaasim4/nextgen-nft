import React from "react";
import Newsletter_img from "../../assets/Images/Newsletter.png";
import "./Newsletter.scss";
const Newsletter = () => {
  return (
    <section className="Newsletter">
      <div className="Newsletter-main">
        <div className="Newsletter-left">
          <img src={Newsletter_img} alt="" />
        </div>
        <div className="Newsletter-right">
          <h2>Subscribe And get Latest news update about NFTs.</h2>
          <p>
            In commodo auctor eget congue sit. Ultrices eget pretium sit euismod
            mi id. Risus, aliquam odio posuere ac in in nisl sed augue. Porta
            aenean egestas malesuada in pulvinar enim viverra.
          </p>
          <div className="Newsletter-subscribe">
            <input type="text" placeholder="Write your email here" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
