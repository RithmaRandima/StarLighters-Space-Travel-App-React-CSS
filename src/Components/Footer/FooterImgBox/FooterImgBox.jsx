import React from "react";
import { FaInstagram, FaInstagramSquare } from "react-icons/fa";

const FooterImgBox = (props) => {
  return (
    <div className="w-[100%] h-[120px] overflow-hidden relative">
      <img
        src={props.img}
        className="w-[100%] h-[100%] object-cover"
        alt=""
        loading="lazy"
      />
      <FaInstagram className="absolute top-3 right-3 text-[white] text-[20px] cursor-pointer" />
    </div>
  );
};

export default FooterImgBox;
