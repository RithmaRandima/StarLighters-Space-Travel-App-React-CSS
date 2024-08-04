import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import space_video from "../../Assets/space2.mp4";

const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={space_video} type="video/mp4" />
      </video>
      <div className="content">
        <h1>
          Zero <span style={{ color: "blueviolet" }}>Gravity</span> Travel.
        </h1>
        <p>World's first civilian space travel</p>

        <div>
          <Link to="/training" className="btn">
            Training
          </Link>
          <Link to="/contact" className="btn btn-light">
            Launch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
