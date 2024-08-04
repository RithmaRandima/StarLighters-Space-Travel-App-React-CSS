import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const [activeNav, setActiveNav] = useState("home");

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>StarLighters</h1>
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
