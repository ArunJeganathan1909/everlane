import React, { useState, useEffect } from "react";
import "../../assets/css/components/ImageDisplay.css";

const ImageDisplay = ({ images, selectedImage, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(
    images.indexOf(selectedImage)
  );

  let touchStartX = 0;
  let touchEndX = 0;

  const showNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPreviousImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchEndX < touchStartX) {
      showNextImage();
    }
    if (touchEndX > touchStartX) {
      showPreviousImage();
    }
  };

  return (
    <div
      className="image-overlay"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="image-display" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="image-display-container">
          <div className="image-display-lefticon">
            <button
              className="arrow-button left-arrow"
              onClick={showPreviousImage}
            >
              &lt;
            </button>
          </div>
          <div className="image-display-selectedImage">
            <img
              src={images[currentIndex]}
              alt="Selected Product"
              className="image-display-img"
            />
          </div>

          <div className="image-display-righticon">
            <button
              className="arrow-button right-arrow"
              onClick={showNextImage}
            >
              &gt;
            </button>
          </div>
        </div>
        <div className="image-thumbnails">
          {images.map((image, index) => (
            <div
              key={index}
              className={`thumbnail ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={image}
                alt={`Thumbnail ${index}`}
                className="thumbnail-img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageDisplay;
