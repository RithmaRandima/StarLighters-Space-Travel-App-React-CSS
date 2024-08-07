import React from "react";
import Footer from "../../Components/Footer/Footer";
import HeroImage from "../../Components/HeroImage/HeroImage";
import PricingBox from "../../Components/PricingBox/PricingBox";
import "./Pricing.css";
import { ReactTyped } from "react-typed";
import PriceAbout from "../../Components/PriceAbout/PriceAbout";
import PriceAboutTwo from "../../Components/PriceAboutTwo/PriceAboutTwo";
import Newsletter from "../../Components/Newsletter/Newsletter";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactSection from "../../Components/ContactSection/ContactSection";

const Pricing = () => {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1600,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,

          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div>
      <HeroImage heading="PRICING" text="Choose your trip.." />
      <div className="pricing-container ">
        <PriceAbout />
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
        <div className="w-[85%] h-[100%] ">
          <Slider {...settings}>
            <PricingBox heading="Basic" btc="1" />
            <PricingBox heading="Suit" btc="5" />
            <PricingBox heading="Couple" btc="7" />
            <PricingBox heading="Family" btc="14" />
            <PricingBox heading="Executive" btc="20" />
          </Slider>
        </div>
      </div>
      <PriceAboutTwo />
      <Newsletter />
      <Footer />
      <ContactSection />
    </div>
  );
};

export default Pricing;
