import React from "react";
import "./TrainingInfo.css";

import back_top_one from "../../Assets/top-img-1.jpg";
import back_top_two from "../../Assets/top-img-2.jpg";
import { Link } from "react-router-dom";

const TrainingInfo = () => {
  return (
    <div className="training-info">
      <div className="left">
        <p className="about">about</p>
        <h1>Training</h1>
        <p>
          Thorough training is a necessity when traveling to space. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Voluptatem, eos.
          Blanditiis maiores fuga, molestiae voluptate sunt ratione debitis
          adipisci earum in, nam, perspiciatis eos ut officiis illo eum
          accusantium atque.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="image-stack top">
            <img src={back_top_one} className="top-img-1" alt="" />
            <img src={back_top_two} className="top-img-2" alt="" />
          </div>

          {/* <div className="image-stack bottom">
            <img src={training_info_background} className="img2" alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TrainingInfo;
