import React from "react";
import twoImage from "../assets/hamburgerArkaPlan.jpg";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${twoImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>This is a world brand. The best place to taste.</p>
      </div>
    </div>
  );
}

export default About;
