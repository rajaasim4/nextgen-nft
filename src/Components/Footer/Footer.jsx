import React from "react";
import {
  BsInstagram,
  BsYoutube,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/all";
import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="Footer-main">
          <div className="footer-section1 footer-section">
            <h3>
              Next <span> GEN</span>
            </h3>
            <p>
              Ultrices eget pretium sit euismod mi id posuere ac in in nisl sed
              augue. Posuere ac in in nisl sed augue.
            </p>
            <div className="Footer-social">
              <a href="">
                <FaFacebookF />
              </a>
              <a href="">
                <BsInstagram />
              </a>
              <a href="">
                <FaTwitter />
              </a>
              <a href="">
                <FaLinkedinIn />
              </a>
              <a href="">
                <BsYoutube />
              </a>
            </div>
          </div>
          <div className="footer-section2 footer-section">
            <h4>Marketplace</h4>
            <ul>
              <li>
                <a href="">NFT'S</a>
              </li>
              <li>
                <a href="">Arts</a>
              </li>
              <li>
                <a href="">Collectible</a>
              </li>
              <li>
                <a href="">Virtual World</a>
              </li>
            </ul>
          </div>
          <div className="footer-section3 footer-section">
            <h4>Info</h4>
            <ul>
              <li>
                <a href="">Activity</a>
              </li>
              <li>
                <a href="">Stats</a>
              </li>
              <li>
                <a href="">Resources</a>
              </li>
            </ul>
          </div>
          <div className="footer-section4 footer-section">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Support</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Top Creators</a>
              </li>
            </ul>
          </div>
          <div className="footer-section5 footer-section">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="">Info</a>
              </li>
              <li>
                <a href="">Aflliate</a>
              </li>
              <li>
                <a href="">Associated</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="Copyright">
          <p>
            © {new Date().getFullYear()} Copyright NEXTGEN .All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
