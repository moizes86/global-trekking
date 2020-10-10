import React, { useState } from "react";
import { useEffect } from "react";
import "./navbar.styles.scss";

const Navbar = () => {
  const [navOpen, toggleNav] = useState(false);
  const [navBgActive, toggleNavBackgroundColor] = useState(false);

  useEffect(() => {
    const getPageOffset = () => {
      window.pageYOffset > 50 ? toggleNavBackgroundColor(true) : toggleNavBackgroundColor(false);
    };

    window.addEventListener("scroll", getPageOffset);
  });

  return (
    <nav className={`${navBgActive ? "bg-color-active" : ""}`}>
      <ul>
        {/**LOGO */}
        <li className="website-logo">
          <a href="/#">
            <img src={process.env.PUBLIC_URL + "gt-logo.jpg"} alt="" />
          </a>
        </li>

        {/** Hamburger */}
        <li
          className={`hamburger `}
          onClick={() => {
            toggleNav(!navOpen);
            navOpen? toggleNavBackgroundColor(false): toggleNavBackgroundColor(true)
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </li>

        {/** ITEMS */}
        <li
          style={{ display: navOpen ? "flex" : "" }}
          className={`li-items display-none ${navBgActive}`}
          onClick={() => toggleNav(!navOpen)}
        >
          <div>
            <a href="#about-us">About Us</a>
          </div>
          <div>
            <a href="#upcoming-tours">Upcoming Tours</a>
          </div>
          <div>
            <a href="#reviews">Reviews</a>
          </div>
          <div>
            <a href="#subscribe">Updates And Offers</a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
