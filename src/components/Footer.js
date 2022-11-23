import React from "react";
import FB from "../images/fb-logo.png";
import twitter from "../images/twitter.png";
import github from "../images/github.png";
import IG from "../images/ig-logo.png";

export default function Footer() {
  return (
    <div className="footer--container">
      <div className="footer--item">
        <img src={FB} alt="x" className="footer--img" />
        <img src={IG} alt="x" className="footer--img" />
        <img src={twitter} alt="x" className="footer--img" />
        <img src={github} alt="x" className="footer--img" />
      </div>
    </div>
  );
}
