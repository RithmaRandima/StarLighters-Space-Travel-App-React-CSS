import React from "react";
import "./Training.css";
import Footer from "../../Components/Footer/Footer";
import HeroImage from "../../Components/HeroImage/HeroImage";
import { ReactTyped } from "react-typed";
import About from "../../Components/About/About";
import TestimonialAndStaff from "../../Components/TestimonialsAndStaff/TestimonialsAndStaff";
import TrainingSection from "../../Components/TrainingSection/TrainingSection";

const Training = () => {
  return (
    <div className="training">
      <HeroImage heading="TRAINING." text="Pre-Flight & In-Flight Training." />
      <div>
        {/* <div className="training-text">
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
        </div> */}
      </div>
      <About />
      <TrainingSection />
      <TestimonialAndStaff />
      <Footer />
    </div>
  );
};

export default Training;
