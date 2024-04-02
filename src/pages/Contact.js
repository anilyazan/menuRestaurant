import React from "react";
import twoImage from "../assets/hamburgerArkaPlan.jpg";
function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${twoImage}) ` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us </h1>
        <form id="contact-form">
          <label htmlFor="name"> Full Name </label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email"> E-mail </label>
          <input name="mail" placeholder="Enter an e-mail..." type="email" />
          <label htmlFor="message"> Message </label>
          <textarea name="message" placeholder="Enter your message"></textarea>
          <button type="submit"> Send Message </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
