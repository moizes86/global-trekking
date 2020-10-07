import React from "react";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="section footer">
      <ul>
        <li>
          <a
            href="https://www.facebook.com/moshe.mantsur/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fa fa-facebook-square"></i>
          </a>
        </li>
        <li>
          <a href=" " target="_blank" rel="noreferrer noopener">
            <i className="fa fa-github-square"></i>
          </a>
        </li>
      
      </ul>
      <div>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
    </div>
  );
};

export default Footer;
