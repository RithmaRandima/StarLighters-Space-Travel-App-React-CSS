import React from "react";
import "./Home.css";
import Hero from "../../Components/Hero/Hero";
import Footer from "../../Components/Footer/Footer";
import About from "../../Components/About/About";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
