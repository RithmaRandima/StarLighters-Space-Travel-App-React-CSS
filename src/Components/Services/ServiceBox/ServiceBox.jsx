import React from "react";
import { CgArrowLongRight } from "react-icons/cg";

const ServiceBox = (props) => {
  return (
    <div className=" w-[100%] h-fit pb-[10px]">
      <div className="service-box-img-container w-[100%] h-[300px] bg-red-500">
        <img src={props.img} alt="" />
      </div>
      <div>
        <h1>{props.num}1</h1>
        <h1>Lorem ipsum dolor sit amet. {props.title}</h1>
        <button>
          <CgArrowLongRight />
        </button>
      </div>
      <div className="progress-bar w-[100%] h-[2px] bg-red-700"></div>
    </div>
  );
};

export default ServiceBox;
