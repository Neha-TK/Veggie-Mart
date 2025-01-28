import React from "react";
import Explore from "../Assets/work1.png";
import Schedule from "../Assets/work2.png";
import Deliver from "../Assets/work3.png";

const Work = () => {
  const workInfoData = [
    {
      image: Explore,
      title: "Shop with Ease",
      text: "Explore a wide variety of fresh groceries and essentials, all in one place.",
    },
    {
      image: Schedule,
      title: "Plan Your Order",
      text: "Pick a delivery time that’s convenient for you—we’ll handle the rest.",
    },
    {
      image: Deliver,
      title: "Enjoy Fast Delivery",
      text: "Sit back and relax while we deliver your groceries straight to your door.",
    },
   
  ];
  return (
    <div className="work-section-wrapper">

      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Simply browse our wide range of grocery items, select what you need, and schedule a convenient delivery time. Our team will ensure everything arrives at your doorstep fresh and on time. It’s that easy!
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img className="info-boxes-img" src={data.image} alt="" />
            </div>
            <h2 className="info-boxes-heading">{data.title}</h2>
            <p className="info-boxes-text">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
