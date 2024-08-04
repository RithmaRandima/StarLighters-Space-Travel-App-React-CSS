import React from "react";
import "./ContactForm.css";
import contact_img from "../../Assets/training-info.png";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <form action="">
        <label htmlFor="">Your Name</label>
        <input type="text" />
        <label htmlFor="">Your Email</label>
        <input type="email" />
        <label htmlFor="">Subject</label>
        <input type="text" />
        <label htmlFor="">Details</label>
        <textarea
          name=""
          id=""
          rows="6"
          placeholder="Type a short message here"
        ></textarea>
        <button className="btn submit-btn">Submit</button>
      </form>
      <img src={contact_img} className="contact-img" alt="" />
    </div>
  );
};

export default ContactForm;
