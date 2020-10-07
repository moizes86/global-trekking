import React, { useState } from "react";
import { useEffect } from "react";
import "./navbar.styles.scss";

const Navbar = () => {
  const [navbarShown, setNavbarShown] = useState(false);
  const [navBgActive, setNavBgActive] = useState("");

  useEffect(() => {
    const getPageOffset = () => {
      return window.pageYOffset > 100
        ? setNavBgActive("bg-color-active")
        : setNavBgActive("");
    };

    window.addEventListener("scroll", getPageOffset);
  });

  return (
    <nav className={`${navBgActive}`}>
      <ul>
        {/**LOGO */}
        <li className="website-logo">
          <a href="/#">
            <img src={process.env.PUBLIC_URL + "fuji-mountain.svg"} alt="" />
          </a>
        </li>
        
        {/** ITEMS */}
        <li
          className={`li-items ${navbarShown ? `show ` : ""}`}
          onClick={() => setNavbarShown(false)}
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
        
        {/** Hamburger */}
        <li className="hamburger" onClick={() => setNavbarShown(!navbarShown)}>
          <div></div>
          <div></div>
          <div></div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
