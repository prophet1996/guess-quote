import React from "react";
import "./NotFound.css";
import logoquote from "../../logoquote.png";

const NotFound = () => (
  <div className="NotFound">
    <img src={logoquote} alt="logo" />
    <h1 className="heading">Page Not Found</h1>
    <p className="text">
      Explore. Dream. Discover, but not here this is a 404 <br />
      <a href="/">GO BACK!</a>
    </p>
  </div>
);

export default NotFound;
