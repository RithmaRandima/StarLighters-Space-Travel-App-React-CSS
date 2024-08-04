import React from "react";
import "./Contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import HeroImage from "../../Components/HeroImage/HeroImage";
import ContactForm from "../../Components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="Contact" text="Contact us for your Everything " />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
