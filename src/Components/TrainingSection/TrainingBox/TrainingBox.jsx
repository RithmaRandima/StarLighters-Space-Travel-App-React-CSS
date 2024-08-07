import React from "react";
import { CgArrowLongRight } from "react-icons/cg";

const TrainingBox = (props) => {
  return (
    <div className="training-box w-[95%] h-fit pb-[10px] m-4">
      <div className="service-box-img-container w-[100%] h-[250px] ">
        <img
          src={props.img}
          className="w-[100%] h-[100%] object-cover"
          alt=""
        />
      </div>
      <div className="flex gap-3 items-center justify-between my-3 overflow-hidden">
        <div className="service-box-text-content flex gap-2 items-center ml-[-35px] duration-500">
          <h1 className="text-[20px] font-extrabold">0{props.num}.</h1>
          <h1 className="text-[19px] font-bold">{props.title}.</h1>
        </div>

        <div className="service-box-button text-white w-[35px] h-[35px] border-[1px] border-white/20 rounded-full flex justify-center items-center duration-500">
          <button>
            <CgArrowLongRight />
          </button>
        </div>
      </div>
      <p className="training-box-description h-0 overflow-hidden mb-[20px]">
        {props.desc}
        <span className="block text-[blueviolet] text-[18px] my-5 md:my-[2px] font-bold">
          $ {props.price}
        </span>
      </p>
      <div className="service-box-progress-bar relative w-[100%] h-[2px] bg-white"></div>
    </div>
  );
};

export default TrainingBox;
