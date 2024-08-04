import React from "react";
import Footer from "../../Components/Footer/Footer";
import HeroImage from "../../Components/HeroImage/HeroImage";
import PricingBox from "../../Components/PricingBox/PricingBox";
import "./Pricing.css";
import { ReactTyped } from "react-typed";

const Pricing = () => {
  return (
    <div>
      <HeroImage heading="PRICING" text="Choose your trip.." />
      <div className="pricing-container">
        <div className="pricing-text">
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
        <div className="box-container">
          <PricingBox heading="Basic" btc="1" />
          <PricingBox heading="Suit" btc="5" />
          <PricingBox heading="Executive" btc="7" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
