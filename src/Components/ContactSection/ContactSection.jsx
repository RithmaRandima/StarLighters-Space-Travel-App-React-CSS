import React, { useContext } from "react";
import img1 from "../../Assets/gallery-img-1.jpg";
import img2 from "../../Assets/gallery-img-1.jpg";
import img3 from "../../Assets/gallery-img-1.jpg";
import img4 from "../../Assets/gallery-img-1.jpg";
import img5 from "../../Assets/gallery-img-1.jpg";
import img6 from "../../Assets/gallery-img-1.jpg";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn, FaTimes } from "react-icons/fa";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

const ContactSection = () => {
  const { contactOpen, setContactOpen, setActiveNav, setClick } =
    useContext(AppContext);

  return (
    <div
      className={
        contactOpen === true
          ? "absolute bg-[#000] md:h-[100vh]  h-[500vh] w-[100%] md:w-[35%] top-0 left-0 duration-700 z-10"
          : "absolute bg-black  md:h-[100vh] h-[500vh] w-[100%] md:w-[35%] top-0 left-[-100%] duration-1000"
      }
    >
      <div className="absolute w-full md:w-fit h-[100%] p-4">
        {/* logo Section */}
        <div className="relative  border-[blueviolet] bg-white pl-1  pb-1 pr-1 w-fit">
          <h1 className="text-[13px] font-bold">
            <span className="font-extrabold text-[15px] text-[blueviolet]">
              StarLighters
            </span>{" "}
          </h1>
          <p className="absolute text-[8px] bottom-[-7px] right-[-30px] bg-[blueviolet] border-[blueviolet] border-[1px] text-white font-bold px-1 tracking-[1px]">
            beyond the universe
          </p>
        </div>
        <p className="w-[200px] mx-auto my-5 mt-6 text-[17px] text-center">
          Your Dream Vacation in the universe, one Full Adventure at a Time!
        </p>

        {/* img container */}
        <div className="w-[60%] md:w-[70%] mx-auto h-[180px] my-4 grid grid-cols-3 gap-[15px]">
          <img
            src={img1}
            className="w-[100%] h-[80px] object-cover rounded-[20px]"
            alt=""
          />

          <img
            src={img2}
            className="w-[100%] h-[80px] object-cover rounded-[20px]"
            alt=""
          />

          <img
            src={img3}
            className="w-[100%] h-[80px] object-cover rounded-[20px]"
            alt=""
          />

          <img
            src={img4}
            className="w-[100%] h-[80px] object-cover rounded-[20px]"
            alt=""
          />

          <img
            src={img5}
            className="w-[100%] h-[80px] object-cover rounded-[20px]"
            alt=""
          />

          <img
            src={img6}
            className="w-[100%] h-[80px] object-cover rounded-[20px]"
            alt=""
          />
        </div>
        {/* details */}
        <div className="text-center md:text-left w-[70%] mx-auto font-sans">
          <div className="my-3">
            <h1 className="font-bold text-[19px]">Email</h1>
            <p className="text-[13px] text-[blueviolet]">
              starlighters@travel.com
            </p>
          </div>

          <div className="my-3">
            <h1 className="font-bold text-[19px]">Phone</h1>
            <p className="text-[13px]">Travel Agency + 1 473 483 384</p>
            <p className="text-[13px]">info insurance + 1 474 499 384</p>
          </div>

          <div className="my-2 mt-4">
            <h1 className="font-bold text-[19px]">Follow Us</h1>
            <div className="flex justify-between items-center mt-3 w-[50%] mx-auto md:ml-0">
              <FaFacebookF className="text-[18px] text-[blueviolet] hover:scale-125 hover:text-[#fff] cursor-pointer duration-300" />
              <FaTwitter className="text-[18px] text-[blueviolet] hover:scale-125 hover:text-[#fff] cursor-pointer duration-300" />
              <FaLinkedinIn className="text-[18px] text-[blueviolet] hover:scale-125 hover:text-[#fff] cursor-pointer duration-300" />
              <FaInstagram className="text-[18px] text-[blueviolet] hover:scale-125 hover:text-[#fff] cursor-pointer duration-300" />
            </div>
          </div>
        </div>
      </div>

      <Link to="/">
        <div
          className="absolute top-[20px] right-[20px] cursor-pointer text-white hover:text-[blueviolet]"
          onClick={() => {
            // setSideBar(false);
            // setNavStatus("home");
            setContactOpen(false);
            setClick(false);
            setActiveNav("home");
          }}
        >
          <FaTimes className="text-[20px]" />
        </div>
      </Link>
    </div>
  );
};

export default ContactSection;
