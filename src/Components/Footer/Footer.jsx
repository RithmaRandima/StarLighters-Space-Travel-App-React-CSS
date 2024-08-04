import React from "react";
import "./Footer.css";
import {
  FaLinkedin,
  FaMailBulk,
  FaSearchLocation,
  FaPhone,
  FaInstagramSquare,
  FaTwitterSquare,
  FaFacebookSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "blueviolet", marginRight: "2rem" }}
            />
            <div>
              <p className="top">123 Acme St,</p>
              <p>Houston, Tx</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "blueviolet", marginRight: "2rem" }}
              />
              1-800-123-1234
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "blueviolet", marginRight: "2rem" }}
              />
              zerogravity@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the Company</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
            repellat ducimus consequatur quis nisi odit magni a optio at, fugiat
            veniam molestiae suscipit corrupti natus magnam quos, beatae atque?
            Obcaecati?
          </p>
          <div className="social-icons">
            <FaFacebookSquare
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
              className="social-icon"
            />
            <FaTwitterSquare
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
              className="social-icon"
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
              className="social-icon"
            />
            <FaInstagramSquare
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
              className="social-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
