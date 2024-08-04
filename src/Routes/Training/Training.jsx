import React from "react";
import "./Training.css";
import Footer from "../../Components/Footer/Footer";
import HeroImage from "../../Components/HeroImage/HeroImage";
import TrainingInfo from "../../Components/TrainingInfo/TrainingInfo";
import { ReactTyped } from "react-typed";

const Training = () => {
  return (
    <div className="training">
      <HeroImage heading="TRAINING." text="Pre-Flight & In-Flight Training." />
      <div>
        <div className="training-text">
          <ReactTyped
            strings={["Check Our Plans "]}
            className="about-container-title"
            typeSpeed={470}
            loop
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima odio
            deserunt cupiditate itaque atque alias neque nisi modi! Officiis
            fugiat laboriosam iusto minima accusamus qui. Numquam reiciendis
            impedit iste harum.
          </p>
        </div>
      </div>
      <TrainingInfo />
      <Footer />
    </div>
  );
};

export default Training;
