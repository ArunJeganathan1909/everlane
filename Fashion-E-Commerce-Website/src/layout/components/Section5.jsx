import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../../assets/css/components/Section5.css";

import TheBomberJacket from "../../assets/images/The Bomber Jacket.jpeg";
import TheBomberJacket2 from "../../assets/images/The Bomber Jacket2.jpeg";
import TheWaffleLongSleeveCrew from "../../assets/images/The Waffle Long-Sleeve Crew.jpg";
import TheWaffleLongSleeveCrew2 from "../../assets/images/The Waffle Long-Sleeve Crew2.jpeg";
import TheEssentialOrganicCrew from "../../assets/images/The Essential Organic Crew.jpeg";
import TheHeavyweight from "../../assets/images/The Heavyweight.jpeg";
import TheSlim4WayStretchOrganicJean from "../../assets/images/The Slim 4-Way Stretch Organic Jean.jpeg";

const Section5 = () => {
  const products = [
    {
      image: TheWaffleLongSleeveCrew,
      title: "The Waffle Long-Sleeve Crew",
      price: "$60",
      description: "Base",
    },
    {
      image: TheBomberJacket,
      title: "The Bomber Jacket",
      price: "$60",
      description: "Toasted Coconut",
    },
    {
      image: TheSlim4WayStretchOrganicJean,
      title: "The Slim 4-Way Stretch Organic Jean",
      price: "$140",
      description: "Dark Indigo",
    },
    {
      image: TheEssentialOrganicCrew,
      title: "The Essential Organic Crew",
      price: "$80",
      description: "Vintage Black",
    },
    {
      image: TheHeavyweight,
      title: "The Heavyweight",
      price: "$30",
      description: "Heathered Brove",
    },
    {
      image: TheWaffleLongSleeveCrew2,
      title: "The Waffle Long-Sleeve Crew",
      price: "$60",
      description: "Base",
    },
    {
      image: TheBomberJacket2,
      title: "The Bomber Jacket",
      price: "$60",
      description: "Toasted Coconut",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(4);

  const updateCardsPerSlide = () => {
    const width = window.innerWidth;
    if (width <= 480) {
      setCardsPerSlide(2);
    } else if (width <= 767) {
      setCardsPerSlide(3);
    } else {
      setCardsPerSlide(4);
    }
  };

  useEffect(() => {
    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  const handleNext = () => {
    if (currentSlide < Math.ceil(products.length / cardsPerSlide) - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const visibleProducts = products.slice(
    currentSlide * cardsPerSlide,
    (currentSlide + 1) * cardsPerSlide
  );

  return (
    <div className="everlane-favorites">
      <div className="container-favorite">
        <div className="container-favorite-top">
          <h2 className="title">Everlane Favorites</h2>
          <p className="subtitle">
            Beautifully Functional. Purposefully Designed. Consciously Crafted.
          </p>
        </div>

        <div className="product-slider">
          <div
            className="slider-container"
            style={{ marginLeft: currentSlide === 0 ? "30px" : "0" }}
          >
            {currentSlide > 0 && (
              <FaArrowLeft className="slider-nav left" onClick={handlePrev} />
            )}
            {visibleProducts.map((product, index) => (
              <div key={index} className="product-card">
                <img src={product.image} alt={product.title} />
                <div className="product-info">
                  <div className="product-maininfo">
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-price">{product.price}</p>
                  </div>
                  <div>
                    <p className="product-description">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
            {currentSlide < Math.ceil(products.length / cardsPerSlide) - 1 ? (
              <FaArrowRight className="slider-nav right" onClick={handleNext} />
            ) : (
              <div className="show-all" onClick={() => setCurrentSlide(0)}>
                <a href="/favorite-page">
                  <button>Show All</button>
                </a>
              </div>
            )}
          </div>
          <div className="slider-dots">
            {Array(Math.ceil(products.length / cardsPerSlide))
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className={`slider-dot ${
                    index === currentSlide ? "active" : ""
                  }`}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
