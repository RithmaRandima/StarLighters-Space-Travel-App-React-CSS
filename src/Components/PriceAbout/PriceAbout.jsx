import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import img1 from "../../Assets/Pricing-About-Pwo.jpeg";
import img2 from "../../Assets/news-3.jpeg";
import img3 from "../../Assets/Training-About.jpeg";

const PriceAbout = () => {
  return (
    <div className="w-[100%] h-[100%] grid grid-cols-1 md:grid-cols-2 mb-10 overflow-x-hidden ">
      <div className="hidden md:flex w-[100%] h-[100%] justify-start pl-8 relative">
        <div className=" w-[39%] h-[100vh] ">
          <img
            src={img1}
            className="w-[100%] h-[100%] object-cover object-left"
            alt=""
          />
        </div>
        <div className="absolute w-[180px] h-[90vh] top-[50%] translate-y-[-50%] right-[160px]">
          <img src={img2} className="w-[100%] h-[100%] object-cover " alt="" />
        </div>

        <div className="absolute w-[150px] h-[80vh] top-[50%] translate-y-[-50%] right-[-10px]">
          <img
            src={img3}
            className="w-[100%] h-[100%] object-cover object-right"
            alt=""
          />
        </div>
      </div>

      <div className="relative w-[100%] h-[100%] md:ml-[50px]">
        <div className="absolute top-[150px] left-[30px]">
          <p className="uppercase text-[12px] mb-2 font-bold tracking-[2px]">
            KEY ACHIEVEMENTS
          </p>
          <h1 className="text-[45px] md:text-[59px] font-[500] leading-[47px] mb-[30px]">
            Our milestones in space exploration <br />
            and Traveling
          </h1>
          <p className="text-white/60 font-[100] leading-7 text-[17px] w-[82%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            voluptas magni sapiente facere porro nesciunt tempora, accusamus
            minus sunt quia cupiditate aperiam. Cumque, distinctio similique
            animi minus accusamus quasi veniam.
          </p>
          <div className="flex items-center text-[18px] font-[200] text-white mt-6">
            <button>See More</button>
            <FaLongArrowAltRight className="ml-3 " />
          </div>
        </div>

        {/* big text */}
        <div className="absolute top-[-60px] left-[50%] translate-x-[-50%] text-[300px] font-extrabold text-[#383838]/30">
          01
        </div>
      </div>
    </div>
  );
};

export default PriceAbout;
