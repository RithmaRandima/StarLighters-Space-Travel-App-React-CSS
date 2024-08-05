import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="w-[100%] py-[30px] md:py-[10px] h-[100%] md:h-[30vh] bg-[blueviolet] my-[100px] flex flex-col md:flex-row items-center justify-between px-10 gap-5 md:gap-10">
      <div className="flex-1">
        <h1 className="text-[35px] text-center md:text-left md:text-[30px] font-bold">
          Stay updated with cosmic discoveries!
        </h1>
      </div>
      <div className="flex-1">
        <input
          type="email"
          placeholder="Enter your email address"
          className="bg-transparent w-[100%] md:w-[80%] p-2 border-b-[1px] mb-4 text-white font-[300] text-[17px] tracking-[1px] outline-0 "
        />
        <br />
        <input type="checkbox" id="check" className="mr-3" />
        <label htmlFor="check" className="text-white font-[200]">
          I agree to the{" "}
          <span className="underline cursor-pointer">Privacy Policy</span>.
        </label>
      </div>
      <div className="w-[100px] text-center font-bold text-white text-[19px] ">
        <button className="flex items-center">
          <FaPaperPlane className="mr-2 " />
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
