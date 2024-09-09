import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import ReviewCard from "./ReviewCard";
import "../../assets/css/components/Section6.css";

import TheBomberJacket from "../../assets/images/The Bomber Jacket.jpeg";
import TheWaffleLongSleeveCrew from "../../assets/images/The Waffle Long-Sleeve Crew.jpg";
import TheWaffleLongSleeveCrew2 from "../../assets/images/The Waffle Long-Sleeve Crew2.jpeg";
import TheEssentialOrganicCrew from "../../assets/images/The Essential Organic Crew.jpeg";
import TheHeavyweight from "../../assets/images/The Heavyweight.jpeg";
import TheSlim4WayStretchOrganicJean from "../../assets/images/The Slim 4-Way Stretch Organic Jean.jpeg";

const Section6 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const products = [
    {
      image: TheWaffleLongSleeveCrew,
      title: "The Waffle Long-Sleeve Crew",
      rating: 3,
      review:
        "Love this shirt! Fits perfectly and the fabric is thick without being stiff.",
      reviewerName: "JonSnSF",
      salesAgent: "Bruce Miller",
    },
    {
      image: TheBomberJacket,
      title: "The Bomber Jacket",
      rating: 5,
      review:
        "Love this shirt! Fits perfectly and the fabric is thick without being stiff.",
      reviewerName: "JonSnSF",
      salesAgent: "Bruce Miller",
    },
    {
      image: TheSlim4WayStretchOrganicJean,
      title: "The Slim 4-Way Stretch Organic Jean",
      rating: 3,
      review:
        "Love this shirt! Fits perfectly and the fabric is thick without being stiff.",
      reviewerName: "JonSnSF",
      salesAgent: "Bruce Miller",
    },
    {
      image: TheEssentialOrganicCrew,
      title: "The Essential Organic Crew",
      rating: 5,
      review:
        "Love this shirt! Fits perfectly and the fabric is thick without being stiff.",
      reviewerName: "JonSnSF",
      salesAgent: "Bruce Miller",
    },
    {
      image: TheHeavyweight,
      title: "The Heavyweight",
      rating: 4,
      review:
        "Love this shirt! Fits perfectly and the fabric is thick without being stiff.",
      reviewerName: "JonSnSF",
      salesAgent: "Bruce Miller",
    },
    {
      image: TheWaffleLongSleeveCrew2,
      title: "The Waffle Long-Sleeve Crew",
      rating: 5,
      review:
        "Love this shirt! Fits perfectly and the fabric is thick without being stiff.",
      reviewerName: "JonSnSF",
      salesAgent: "Bruce Miller",
    },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === products.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? products.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="product-review-page">
      <div className="product-review-pagecontant">
        <div className="a111">
          <div className="a111-1">
            <div className="a111-2">
              <div className="a111-1-button">
                <span className="a111-1-buttonSpan">Go place's with us</span>
              </div>
              <span className="a111-1-span">
                Our after-sales customer is rated as excellent!!
              </span>
              <div className="a111-1-description">
                <span className="a111-1-descriptionSpan">
                  Discover how you can offset your adventure's carbon emission
                  and support the sustainable initiatives practice by our
                  operator worldwide.
                </span>
              </div>
            </div>
          </div>
          <div className="review-page">
            <div className="review-card-container">
              <ReviewCard product={products[currentSlide]} />
            </div>
            <div className="dots">
              {products.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === currentSlide ? "active" : ""}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="slidepage">
          {currentSlide !== 0 && (
            <FaArrowLeft className="nav-icon" onClick={handlePreviousSlide} />
          )}
          {currentSlide !== products.length - 1 && (
            <FaArrowRight className="nav-icon" onClick={handleNextSlide} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Section6;
