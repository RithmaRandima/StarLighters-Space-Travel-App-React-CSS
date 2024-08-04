import React from "react";
import "./Home.css";
import Hero from "../../Components/Hero/Hero";
import Footer from "../../Components/Footer/Footer";
import About from "../../Components/About/About";
import Services from "../../Components/Services/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
