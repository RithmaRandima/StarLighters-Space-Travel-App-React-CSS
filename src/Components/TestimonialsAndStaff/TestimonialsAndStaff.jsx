import React from "react";
import StaffBox from "../StaffBox/StaffBox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TestimonialBox from "../TestimonialBox/TestimonialBox";
import { StaffData, testimonialData } from "../../Data/TestimonialAndStaffData";

function TestimonialsAndStaff() {
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

  var settingsTestimonials = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1600,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <div
      id="about"
      className="overflow-hidden  w-full  grid grid-cols-1 md:grid-cols-3 text-center md:text-left bg-[#000] py-10"
    >
      <div className="col-span-2 p-4 py-10 text-white">
        <div>
          <h1 className="font-bold text-[32px] md:text-[37px] mb-[30px]">
            Meet Our Team
          </h1>

          <p className="text-gray-700 text-[18px] mx-auto md:ml-[1px] font-[300] w-[80%] mb-[30px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos rerum
            amet doloribus veniam. Totam commodi unde explicabo a aut tempora
            consectetur quaerat quas, odio nihil libero quam? Excepturi, animi
            corporis?
          </p>
        </div>

        <div className="w-[100%] h-[100%] mt-[20px]">
          <Slider {...settings}>
            {StaffData.map((data) => {
              return (
                <StaffBox
                  img={data.img}
                  key={data.id}
                  name={data.name}
                  position={data.position}
                />
              );
            })}
          </Slider>
        </div>
      </div>

      <div className="h-[500px] mt-10 mb-5 w-[100%] md:w-[340px] mx-auto relative">
        <h1 className="font-bold text-[26px] md:text-[33px] text-center  mb-5 tracking-[3px] text-white">
          Top Reviews
        </h1>
        <Slider {...settingsTestimonials}>
          {testimonialData.map((data) => {
            return (
              <TestimonialBox
                key={data.id}
                title={data.title}
                img={data.img}
                name={data.name}
                city={data.city}
                message={data.message}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default TestimonialsAndStaff;
