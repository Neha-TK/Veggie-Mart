import React from "react";
import ProfilePic from "../Assets/profile-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper" id="testimonial">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        At Veggie Mart, we believe in providing the best experience for our customers. Here’s what they have to say:
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img className="profile-pic" src={ProfilePic} alt="" />
        <p>
        I never knew grocery shopping could be this easy! Everything is fresh and on time.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Mariah</h2>
      </div>
    </div>
  );
};

export default Testimonial;
