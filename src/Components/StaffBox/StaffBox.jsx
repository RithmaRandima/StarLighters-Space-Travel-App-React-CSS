import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const StaffBox = (props) => {
  return (
    <div className="w-[95%] mx-auto h-[280px] md:h-[240px] md:m-2  m-6 overflow-hidden relative text-center">
      <img src={props.img} alt="" className="w-[100%] h-[100%] object-cover" />
      <div className="absolute w-[100%] h-fit bg-gradient-to-t  from-black to-[#000]/50 bottom-0 py-3">
        <p className="text-[15px] capitalize font-bold tracking-[1px]">
          {props.name}
        </p>
        <p className="text-[7px] uppercase text-[blueviolet] tracking-[3px] font-bold mb-2">
          {props.position}
        </p>
        <div className="flex px-7  items-center justify-between text-[blueviolet]">
          <FaFacebook className="hover:scale-125 hover:text-white duration-200" />
          <FaInstagram className="hover:scale-125 hover:text-white duration-200" />
          <FaTwitter className="hover:scale-125 hover:text-white duration-200" />
          <FaLinkedinIn className="hover:scale-125 hover:text-white duration-200" />
        </div>
      </div>
    </div>
  );
};

export default StaffBox;
