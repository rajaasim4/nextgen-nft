import React, { useState } from "react";
import { AiOutlineClose, BiMenu } from "react-icons/all";
import "./NavBar.scss";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const NavShow = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav>
        <div className="Navbar">
          <div className="Nav-logo">
            <h2>
              Next
              <span>Gen</span>
            </h2>
          </div>
          <div className={`${nav ? "Main-nav Main-nav-show" : "Main-nav"}`}>
            <div className="nav-links">
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Marketplcae</a>
                </li>
                <li>
                  <a href="">Community</a>
                </li>
                <li>
                  <a href="">Artist</a>
                </li>
              </ul>
            </div>
            <div className="Nav-btns">
              <button>Log In</button>
              <button>Sign Up</button>
            </div>
          </div>
          <div className="Hamburger">
            {nav ? (
              <AiOutlineClose onClick={NavShow} />
            ) : (
              <BiMenu onClick={NavShow} />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
