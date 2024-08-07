import React from "react";

const TrainingInfoBox = (props) => {
  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-center items-center text-center">
      <p className="text-[14px] tracking-[2px] text-[white]/50">
        {props.title}
      </p>
      <h1 className="text-[30px] md:text-[45px] font-bold text-white">
        {props.count}
      </h1>
    </div>
  );
};

export default TrainingInfoBox;
