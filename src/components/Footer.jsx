import React from "react";
import Logo from "../Assets/VeggieMart-logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper" id="footer">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <a href="https://www.twitter.com"><BsTwitter /></a>
          <a href="https://www.linkedin.com"><SiLinkedin /></a>
          <a href="https://www.youtube.com"><BsYoutube /></a>
          <a href="https://www.facebook.com"><FaFacebookF /></a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span><strong>Our Company</strong></span>
          <span>About</span>
          <span>Services</span>
          <span>Testimonials</span>
        </div>
        <div className="footer-section-columns">
          <span><strong>Contact</strong></span>
          <span>FAQs</span>
          <span>Contact</span>
          <span>About Us</span>
        </div>
        <div className="footer-section-columns">
          <span><strong>Terms & Conditions</strong></span>
          <span>Privacy Policy</span>
          <span>© 2025VeggieMart. All Rights Reserved.</span>
          <span>contact@veggiemart.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
