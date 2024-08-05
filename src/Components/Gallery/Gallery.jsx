import React from "react";
import "./Gallery.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import img1 from "../../Assets/gallery-img-1.jpg";
import img2 from "../../Assets/gallery-img-2.jpg";
import img3 from "../../Assets/gallery-img-3.webp";
import img4 from "../../Assets/Gallery-img-4.jpg";
import img5 from "../../Assets/Gallery-img-5.jpg";
import img6 from "../../Assets/Gallery-img-6.avif";

const Gallery = () => {
  return (
    <div className="w-[100%] h-[180vh] md:h-[100vh] overflow-ellipsis grid grid-cols-1 md:grid-cols-5 md:gap-5 px-3 bg-black ">
      <div className="relative w-[100%] h-[100%] md:col-span-2 bg-[#181818]">
        <div className="absolute top-[150px] left-[30px]">
          <h1 className="text-[45px] md:text-[59px] font-[500] leading-[47px] mb-[30px]">
            EXPLORING OUTER SPACE, ONE MISSION <br /> AT A TIME
          </h1>
          <p className="text-white/60 font-[100] leading-7 text-[17px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            voluptas magni sapiente facere porro nesciunt tempora, accusamus
            minus sunt quia cupiditate aperiam. Cumque, distinctio similique
            animi minus accusamus quasi veniam.
          </p>
          <div className="flex items-center text-[18px] font-[200] text-white mt-6">
            <button>Portfolio</button>
            <FaLongArrowAltRight className="ml-3 " />
          </div>
        </div>

        {/* big text */}
        <div className="absolute top-[-60px] left-[50%] translate-x-[-50%] text-[300px] font-extrabold text-[#383838]/25">
          02
        </div>
      </div>

      <div className="gallery-right-box relative w-[100%] h-[100%] overflow-y-scroll col-span-3">
        <div className="w-[100%] h-[180vh]   absolute">
          <div className="absolute left-0 top-1 w-[100%] md:w-[370px] h-[230px] ">
            <div className="w-[100%] h-[175px]">
              <img
                src={img2}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="hidden md:flex text-white items-center justify-between">
              <h1 className="text-[18px] font-[200]">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <button>
                <FaLongArrowAltRight size={24} />
              </button>
            </div>
          </div>

          <div className="block absolute right-0 top-[200px] md:top-0 w-[300px] md:w-[350px] h-[200px] md:h-[420px]">
            <div className="w-[100%] md:h-[385px] h-[100%]">
              <img
                src={img1}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="hidden md:flex text-white items-center justify-between">
              <h1 className="text-[18px] font-[200]">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <button>
                <FaLongArrowAltRight size={24} />
              </button>
            </div>
          </div>

          <div className="absolute left-[15px] top-[220px] w-[250px] md:w-[350px] h-[530px]">
            <div className="w-[100%] h-[490px]">
              <img
                src={img3}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="hidden md:flex text-white items-center justify-between">
              <h1 className="text-[18px] font-[200]">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <button>
                <FaLongArrowAltRight size={24} />
              </button>
            </div>
          </div>

          <div className="absolute right-2 top-[420px] w-[300px] md:w-[325px] md:h-[370px] ">
            <div className="w-[100%] h-[315px]">
              <img
                src={img4}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="hidden md:flex text-white items-center justify-between">
              <h1 className="text-[18px] font-[200]">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <button>
                <FaLongArrowAltRight size={24} />
              </button>
            </div>
          </div>

          <div className="absolute left-0 top-[760px] w-[100%] md:w-[400px] h-[300px] ">
            <div className="w-[100%] h-[270px]">
              <img
                src={img5}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="hidden md:flex text-white items-center justify-between">
              <h1 className="text-[18px] font-[200]">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <button>
                <FaLongArrowAltRight size={24} />
              </button>
            </div>
          </div>

          <div className="absolute right-6 top-[800px] w-[300px] h-[260px]">
            <div className="w-[100%] h-[200px]">
              <img
                src={img6}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="hidden md:flex text-white items-center justify-between">
              <h1 className="text-[18px] font-[200]">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <button>
                <FaLongArrowAltRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
