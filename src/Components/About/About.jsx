import React from "react";
import "./About.css";
import top_image from "../../Assets/training-info.png";
import { ReactTyped } from "react-typed";

const About = () => {
  return (
    <div className="about-one">
      <div className="about-container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          voluptatibus ex voluptatem"provident itaque, unde quo beatae cumque
          soluta ad possimus animi temporibus aut nihil fugit dolore sequi quos
          obcaecati
        </p>
        <ReactTyped
          strings={["OUR MISSION"]}
          className="about-container-title"
          typeSpeed={470}
          loop
        />
        <img src={top_image} alt="" />
      </div>

      <div className="out-box">
        <h5>Our Stories</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          nihil ullam, facere neque corrupti omnis praesentium eveniet
          reiciendis. Cum earum ea quaerat delectus atque laudantium modi quo
          culpa omnis eius.
        </p>
      </div>
    </div>
  );
};

export default About;
