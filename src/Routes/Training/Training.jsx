import React from "react";
import "./Training.css";
import Footer from "../../Components/Footer/Footer";
import HeroImage from "../../Components/HeroImage/HeroImage";
import TrainingAbout from "../../Components/TrainingAbout/TrainingAbout";
import TestimonialAndStaff from "../../Components/TestimonialsAndStaff/TestimonialsAndStaff";
import TrainingSection from "../../Components/TrainingSection/TrainingSection";
import TrainingInfo from "../../Components/TrainingInfo/TrainingInfo";
import ContactSection from "../../Components/ContactSection/ContactSection";

const Training = () => {
  return (
    <div className="training">
      <HeroImage heading="TRAINING." text="Pre-Flight & In-Flight Training." />
      <TrainingAbout />
      <TrainingSection />
      <TrainingInfo />
      <TestimonialAndStaff />
      <Footer />
      <ContactSection />
    </div>
  );
};

export default Training;
