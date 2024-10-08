import React from "react";
import "./Home.css";
import Hero from "../../Components/Hero/Hero";
import Footer from "../../Components/Footer/Footer";
import Services from "../../Components/Services/Services";
import News from "../../Components/News/News";
import Gallery from "../../Components/Gallery/Gallery";
import WhoAreWe from "../../Components/WhoAreWe/WhoAreWe";
import HeroAbout from "../../Components/HeroAbout/HeroAbout";
import Newsletter from "../../Components/Newsletter/Newsletter";
import ContactSection from "../../Components/ContactSection/ContactSection";

const Home = () => {
  return (
    <div className="home-page-container">
      <Hero />
      <div className="home-back-image">
        <Services />
        <WhoAreWe />
        <HeroAbout />
        <Newsletter />
        <Gallery />
        <News />
        <Footer />
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;
