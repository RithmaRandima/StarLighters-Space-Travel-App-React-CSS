import React from "react";
import "./Services.css";
import ServiceBox from "./ServiceBox/ServiceBox";
import { serviceData } from "../../Data/ServiceData";

const Services = () => {
  return (
    <div className="service-container -[100%] h-[100%] px-7 md:mt-20">
      <div className="mb-10">
        <p className="uppercase text-[12px] md;text-[15px]">Our Service</p>
        <h1 className="text-[25px] md:text-[45px] font-[500]">
          Explore the observatory
        </h1>
      </div>
      <div className="w-[100%] h-[100%] grid grid-cols-1 md:grid-cols-3 gap-5">
        {serviceData.map((data) => {
          return (
            <ServiceBox
              key={data.id}
              img={data.img}
              title={data.title}
              num={data.num}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
