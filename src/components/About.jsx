import React from "react";
import AboutBackground from "../Assets/about-background-green.png";
import AboutBackgroundImage from "../Assets/grocery-about.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container" id="about">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Why Choose Us?
        </h1>
        <p className="primary-text">
        We are committed to making your grocery shopping simple, convenient, and hassle-free. Our platform connects you with the freshest and highest-quality groceries from trusted local suppliers.
        </p>
        <p className="primary-text">
          Whether it's farm-fresh produce, dairy products, or pantry staples, we deliver everything you need—straight to your door.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button"> <BsFillPlayCircleFill /> Watch Video </button>
        </div>
      </div>
    </div>
  );
};

export default About;
