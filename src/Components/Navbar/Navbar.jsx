import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AppContext } from "../../App";

const Navbar = () => {
  const { click, setClick, color, setColor, activeNav, setActiveNav } =
    useContext(AppContext);
  const handleClick = () => {
    setClick(!click);
  };

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
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
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
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
            style={{ color: activeNav === "pricing" ? "blueviolet" : "white" }}
          >
            Pricing
            {activeNav === "pricing" ? <hr /> : <></>}
          </Link>
        </li>
        <li onClick={() => setActiveNav("training")}>
          <Link
            to="/training"
            style={{ color: activeNav === "training" ? "blueviolet" : "white" }}
          >
            Training
            {activeNav === "training" ? <hr /> : <></>}
          </Link>
        </li>
        <li onClick={() => setActiveNav("contact")}>
          <Link
            to="/contact"
            style={{ color: activeNav === "contact" ? "blueviolet" : "white" }}
          >
            Contact
            {activeNav === "contact" ? <hr /> : <></>}
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
