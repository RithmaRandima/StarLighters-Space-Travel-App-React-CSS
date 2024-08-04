import React from "react";
import { CgArrowLongRightR } from "react-icons/cg";

const NewsBox = (props) => {
  return (
    <div className="news-box w-[95%] mx-auto h-fit pb-[10px]">
      <div className="news-box-img-container w-[100%] h-[300px] bg-red-500">
        <img src={props.img} alt="" />
      </div>
      <div>
        <h1>{props.num}1</h1>
        <h1>Lorem ipsum dolor sit amet. {props.title}</h1>
        <button>
          <CgArrowLongRightR />
        </button>
      </div>
      <div className="progress-bar w-[100%] h-[2px] bg-red-700"></div>
    </div>
  );
};

export default NewsBox;
