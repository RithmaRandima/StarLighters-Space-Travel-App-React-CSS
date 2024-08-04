import React from "react";
import "./Services.css";
import ServiceBox from "./ServiceBox/ServiceBox";

const Services = () => {
  return (
    <div className="service-container -[100%] h-[100%] px-7">
      <div>
        <p>Our Service</p>
        <h1>Explore the observatory</h1>
      </div>
      <div className="w-[100%] h-[100%] grid grid-cols-1 md:grid-cols-3 gap-5">
        <ServiceBox />
        <ServiceBox />
        <ServiceBox />
      </div>
    </div>
  );
};

export default Services;
