import React from "react";
import "./News.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsBox from "./NewsBox/NewsBox";
import { newsData } from "../../Data/NewsData";

const News = () => {
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
    <div className="news-container -[100%] h-[100%] px-7 md:my-10 mt-10 md:mt-20">
      <div className="text-center mb-10">
        <p className="uppercase text-[12px] md:text-[15px]">BLOG & NEWS</p>
        <h1 className="text-[25px] md:text-[45px] font-[500]">
          Explore the observatory
        </h1>
      </div>
      <div className="news-box-container w-[100%] h-[100%]">
        <Slider {...settings}>
          {newsData.map((news) => {
            return (
              <NewsBox
                key={news.id}
                img={news.img}
                height={news.height}
                title={news.title}
                date={news.date}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default News;
