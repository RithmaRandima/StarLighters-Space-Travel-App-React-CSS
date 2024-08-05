import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import hero_video from "../../Assets/Hero-Video.mp4";
import hero_small_video_1 from "../../Assets/hero-small-1.mp4";
import hero_small_video_2 from "../../Assets/hero-small-2.mp4";
import hero_small_video_3 from "../../Assets/about-space.mp4";
import hero_small_video_4 from "../../Assets/hero-small-3.mp4";

import hero_image from "../../Assets/training-info.jpg";
import { FaRocket, FaRunning } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={hero_video} type="video/mp4" />
      </video>

      <div className="hero-img-container">
        <video autoPlay loop muted className="w-[100%] h-[450px] object-cover">
          <source src={hero_small_video_4} type="video/mp4" />
        </video>
      </div>

      <div className="hero-img-container-2">
        <video autoPlay loop muted className="w-[100%] h-[450px] object-cover">
          <source src={hero_small_video_1} type="video/mp4" />
        </video>
      </div>

      <div className="hero-img-container-3">
        <video autoPlay loop muted className="w-[100%] h-[450px] object-cover">
          <source src={hero_small_video_3} type="video/mp4" />
        </video>
      </div>

      <div className="hero-img-container-4">
        <video autoPlay loop muted className="w-[100%] h-[450px] object-cover">
          <source src={hero_small_video_2} type="video/mp4" />
        </video>
      </div>

      <div className="content">
        <h1 className="font-bold">
          Space exploration for{" "}
          <span className="text-[30px] block md:text-[50px] text-[blueviolet] uppercase">
            {" "}
            better tomorrow{" "}
          </span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia ipsa
          nemo tempora temporibus nam doloremque placeat. Rerum expedita, error
          voluptatem cum velit commodi nihil odit nulla in sapiente nam
          architecto officiis! Eos aspernatur eum praesentium?
        </p>

        <div className="absolute left-[50%] translate-x-[-50%] md:right-[550px] flex gap-6">
          <Link to="/training">
            <button className="hero-button flex items-center gap-2 text-[23px] hover:scale-105 duration-300">
              <FaRunning className="hero-button-icon duration-700" />
              Training
            </button>
          </Link>
          <Link to="/contact">
            <button className="hero-button flex items-center gap-3 text-[18px] hover:scale-105 duration-300">
              <FaRocket className="hero-button-icon duration-700" />
              Launch
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
