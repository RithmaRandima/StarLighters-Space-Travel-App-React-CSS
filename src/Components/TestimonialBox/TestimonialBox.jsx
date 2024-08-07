import React from "react";
import { FaStar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const TestimonialBox = (props) => {
  return (
    <div className="w-[80%] md:w-[99%] mx-auto h-[300px] m-2 mt-[55px] relative bg-[blueviolet]/20 p-2 py-5 text-white">
      {/* userImg */}
      <div className="w-[80px] h-[80px] rounded-full overflow-hidden absolute left-[50%] translate-x-[-50%] top-[-43px] shadow-sm shadow-white">
        <img
          src={props.img}
          alt=""
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
      {/* title */}
      <h1 className="text-[20px] font-bold mt-7 cursor-pointer hover:text-[blueviolet]">
        {props.title}
      </h1>
      <div className="flex w-[25%] text-[8px] items-center justify-between text-[blueviolet] mb-2 mx-auto md:ml-1">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      {/* description */}
      <p className="font-[200] text-[15px] my-3 ">{props.message}</p>

      <div className="flex sm:flex-col sm:items-start items-center sm:justify-start justify-center mt-10 md:mt-5 gap-1">
        <p className="text-[blueviolet] text-[18px] md:text-[15px] tracking-[2px] font-extrabold">
          {props.name}
        </p>
        <p className="text-[15px] flex  items-center ">
          <IoLocationSharp className="text-[18px] text-[#f00] mr-2" />{" "}
          {props.city}
        </p>
      </div>
    </div>
  );
};

export default TestimonialBox;
