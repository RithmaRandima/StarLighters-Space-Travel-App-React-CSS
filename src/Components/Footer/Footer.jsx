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
import FooterImgBox from "./FooterImgBox/FooterImgBox";

import img1 from "../../Assets/gallery-img-1.jpg";
import img2 from "../../Assets/gallery-img-2.jpg";
import img3 from "../../Assets/gallery-img-3.webp";
import img4 from "../../Assets/Gallery-img-4.jpg";
import img5 from "../../Assets/Gallery-img-5.jpg";
import img6 from "../../Assets/service-1.jpg";
import img7 from "../../Assets/news-4.avif";
import img8 from "../../Assets/news-6.jpg";

const Footer = () => {
  const { activeNav, setActiveNav } = useContext(AppContext);

  return (
    <div className="footer relative mt-[80px]">
      {/* top section */}
      <div className="hidden md:grid w-[100%] mx-auto h-[120px] grid-cols-8 ">
        <FooterImgBox img={img1} />
        <FooterImgBox img={img2} />
        <FooterImgBox img={img3} />
        <FooterImgBox img={img4} />
        <FooterImgBox img={img5} />
        <FooterImgBox img={img6} />
        <FooterImgBox img={img7} />
        <FooterImgBox img={img8} />
      </div>
      {/* bottom section */}
      <div className=" px-5 pt-10">
        <h1 className="text-[18px] md:text-[28px] capitalize mb-5 font-[400] text-center md:text-left">
          Your journey starts here!{" "}
          <span className="text-white/50">Let’s talk!</span>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between mb-7">
          <ul className="flex gap-7 mb-6 md:mb-0">
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
            © 2024
            <span className=" mx-1 text-[blueviolet] font-bold">
              StarLighters
            </span>{" "}
            ALL RIGHTS RESERVED.
          </p>
          {/* logo Section */}

          <div className="relative  border-[blueviolet] bg-white pl-1  pb-1 pr-1">
            <h1 className="text-[13px] font-bold">
              <span className="font-extrabold text-[15px] text-[blueviolet]">
                StarLighters
              </span>{" "}
            </h1>
            <p className="absolute text-[8px] bottom-[-7px] right-[-30px] bg-[blueviolet] border-[blueviolet] border-[1px] text-white font-bold px-1 tracking-[1px]">
              beyond the universe
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
