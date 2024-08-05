import React from "react";

const NewsBox = (props) => {
  return (
    <div className="news-box w-[80%] md:w-[93%] mx-auto h-fit pb-[10px]">
      <div
        className="news-box-img-container w-[100%]"
        style={{ height: props.height }}
      >
        <img
          src={props.img}
          className="h-[100%] w-[100%] object-cover"
          alt=""
        />
      </div>
      <div className="mt-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <div className="w-[35px] mr-2 h-[2px] bg-white rounded-full"></div>

            <p className="font-bold uppercase text-[14px]">Stargazing</p>
            <p>&#183;</p>
            <p className="font-[100] text-[14px] text-white/50">{props.date}</p>
          </div>

          <h1 className="ml-[50px] mt-[10px] text-[20px] font-bold ">
            {props.title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NewsBox;
