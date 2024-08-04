import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import hero_video from "../../Assets/Hero-Video.mp4";
import hero_image from "../../Assets/training-info.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={hero_video} type="video/mp4" />
      </video>

      <div className="hero-img-container">
        <img src={hero_image} alt="" />
      </div>

      <div className="content">
        <h1>Space exploration for a better tomorrow</h1>
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
