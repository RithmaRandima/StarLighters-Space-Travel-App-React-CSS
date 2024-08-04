import React from "react";
import "./News.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsBox from "./NewsBox/NewsBox";

const News = () => {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1600,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <div className="news-container -[100%] h-[100%] px-7">
      <div>
        <p>BLOG & NEWS</p>
        <h1>Explore the observatory</h1>
      </div>
      <div className="news-box-container w-[100%] h-[100%]">
        <Slider {...settings}>
          <NewsBox />
          <NewsBox />
          <NewsBox />
          <NewsBox />
        </Slider>
      </div>
    </div>
  );
};

export default News;
