import React, { useContext } from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaDribbble,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";

const Footer = () => {
  const { activeNav, setActiveNav } = useContext(AppContext);

  return (
    <div className="footer">
      {/* top section */}
      <div className="w-[100%] h-[120px] bg-red-500"></div>
      {/* bottom section */}
      <div className=" px-5 pt-10">
        <h1 className="text-[18px] md:text-[28px] capitalize mb-5 font-[400]">
          Your journey starts here!{" "}
          <span className="text-white/50">Let’s talk!</span>
        </h1>

        <div className="flex items-center justify-between mb-7">
          <ul className="flex gap-7">
            <li onClick={() => setActiveNav("home")}>
              <Link
                to="/"
                style={{ color: activeNav === "home" ? "blueviolet" : "white" }}
              >
                Home
                {activeNav === "home" ? <hr /> : <></>}
              </Link>
            </li>
            <li onClick={() => setActiveNav("pricing")}>
              <Link
                to="/pricing"
                style={{
                  color: activeNav === "pricing" ? "blueviolet" : "white",
                }}
              >
                Pricing
                {activeNav === "pricing" ? <hr /> : <></>}
              </Link>
            </li>
            <li onClick={() => setActiveNav("training")}>
              <Link
                to="/training"
                style={{
                  color: activeNav === "training" ? "blueviolet" : "white",
                }}
              >
                Training
                {activeNav === "training" ? <hr /> : <></>}
              </Link>
            </li>
            <li onClick={() => setActiveNav("contact")}>
              <Link
                to="/contact"
                style={{
                  color: activeNav === "contact" ? "blueviolet" : "white",
                }}
              >
                Contact
                {activeNav === "contact" ? <hr /> : <></>}
              </Link>
            </li>
          </ul>

          <div className="flex gap-3">
            <div className="w-[35px] h-[35px] border-[1px] rounded-full flex items-center justify-center border-[white] hover:bg-[white] hover:text-black text-[white]  duration-200">
              <FaFacebookF className="text-[15px]" />
            </div>

            <div className="w-[35px] h-[35px] border-[1px] rounded-full flex items-center justify-center border-[white] text-[white] hover:bg-[white] hover:text-black  duration-200">
              <FaInstagram className="text-[15px]" />
            </div>

            <div className="w-[35px] h-[35px] border-[1px] rounded-full flex items-center justify-center border-[white] text-[white] hover:bg-[white] hover:text-black duration-200">
              <FaTwitter className="text-[15px]" />
            </div>

            <div className="w-[35px] h-[35px] border-[1px] rounded-full flex items-center justify-center border-[white] text-[white] hover:bg-[white] hover:text-black duration-200">
              <FaLinkedinIn className="text-[15px]" />
            </div>

            <div className="w-[35px] h-[35px] border-[1px] rounded-full flex items-center justify-center border-[white] text-[white] hover:bg-[white] hover:text-black duration-200">
              <FaDribbble className="text-[15px]" />
            </div>
          </div>
        </div>

        <hr />

        {/* copyright text */}
        <div className="flex flex-col md:flex-row md:justify-between justify-center items-center py-4 gap-7 pb-[17px]  bg-[#000000] text-white">
          <p className="text-[10px] md:text-[8px] tracking-[4px]">
            © 2024 Classy<span className="text-red-500 font-bold">Fit</span> ALL
            RIGHTS RESERVED.
          </p>
          {/* logo Section */}
          <div className="relative  border-white border-2 pl-1  pb-1 pr-5">
            <h1 className="text-[15px] font-bold">
              Classy
              <span className="font-extrabold text-[18px] text-[#f00]">
                Fit
              </span>{" "}
            </h1>
            <p className="absolute text-[8px] bottom-[-5px] right-[-10px] bg-white text-black">
              sport Experience
            </p>
          </div>
          <p className="text-[10px] font-bold tracking-[4px]">
            FLY ABOVE THE Universe
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
