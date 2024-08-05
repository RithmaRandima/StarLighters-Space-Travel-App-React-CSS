import React from "react";
import "./Home.css";
import Hero from "../../Components/Hero/Hero";
import Footer from "../../Components/Footer/Footer";
import About from "../../Components/About/About";
import Services from "../../Components/Services/Services";
import News from "../../Components/News/News";
import Gallery from "../../Components/Gallery/Gallery";
import WhoAreWe from "../../Components/WhoAreWe/WhoAreWe";
import HeroAbout from "../../Components/HeroAbout/HeroAbout";
import Newsletter from "../../Components/Newsletter/Newsletter";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <WhoAreWe />
      <HeroAbout />
      <Newsletter />
      <Gallery />
      <News />
      <Footer />
    </div>
  );
};

export default Home;
