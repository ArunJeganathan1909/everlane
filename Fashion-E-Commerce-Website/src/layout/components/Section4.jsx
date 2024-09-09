import React from "react";
import nature from "../../assets/images/nature.jpg";
import "../../assets/css/components/Section4.css";

const Section4 = () => {
  return (
    <div className="banner">
      <img src={nature} alt="Nature" />
      <div className="banner-content">
        <h1>We're on a Mission To Clean Up the Industry</h1>
        <p>Read about our progress in our latest Impact Report.</p>
        <button className="learn-more-btn">LEARN MORE</button>
      </div>
    </div>
  );
};

export default Section4;
