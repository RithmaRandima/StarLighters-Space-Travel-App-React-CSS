import React from "react";
import "./PricingBox.css";
import { Link } from "react-router-dom";

const PricingBox = (props) => {
  return (
    <div className="card">
      <h3>- {props.heading} -</h3>
      <span className="bar"></span>
      <p className="btc">{props.btc} BTC</p>
      <p>- 3 Days -</p>
      <p>- Views -</p>
      <p>- Featured -</p>
      <p>- Private Quarters -</p>
      <Link to=".contact" className="btn">
        Book
      </Link>
    </div>
  );
};

export default PricingBox;
