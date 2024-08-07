import React from "react";
import "./TrainingSection.css";
import TrainingBox from "./TrainingBox/TrainingBox";
import { trainingData } from "../../Data/TrainingData";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrainingSection = () => {
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
    <div className="service-container w-[100%] h-[98vh] px-7 md:mt-20">
      <div className="mb-10">
        <p className="uppercase text-[12px] md;text-[15px]">Our Service</p>
        <h1 className="text-[25px] md:text-[45px] font-[500]">
          Explore the observatory
        </h1>
      </div>
      <div className="w-[100%] h-[100%] ">
        <Slider {...settings}>
          {trainingData.map((data) => {
            return (
              <TrainingBox
                key={data.id}
                img={data.img}
                title={data.title}
                num={data.num}
                desc={data.desc}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default TrainingSection;
