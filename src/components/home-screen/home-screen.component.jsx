import React from "react";

import "./home-screen.styles.scss";
import Navbar from "../navbar/navbar.component";

const HomeScreen = () => {

  const myStyle={
    backgroundImage: `url(${process.env.PUBLIC_URL} home-screen-bg-img.jpg)`,
  }
  return (
    <div
      className="home-screen section"
      style={myStyle}
    >
      <Navbar />
      <div className="content">
        <h1>Jan-Shai Deniz </h1>
        <h2>Global Trekking</h2>
        <img src={process.env.PUBLIC_URL + "gt-logo.jpg"} alt="" />
        <h3>Tours in Swiss German, German, Turkish, Hebrew and Arabic</h3>
      </div>
    </div>
  );
};

export default HomeScreen;
