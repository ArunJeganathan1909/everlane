import React from "react";
import { FaStar } from "react-icons/fa";
import "../../assets/css/components/Section6.css";

const ReviewCard = ({ product }) => {
  return (
    <div className="review-card">
      <div className="product-details">
        <div className="review-content">
          <div className="review-title">{product.title}</div>
          <div className="reviewer-name-container">
            <span className="reviewer-name">{product.reviewerName}</span>
          </div>
          <div className="rating-container">
            <div className="rating">
              {[...Array(product.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <div className="salesAgent-container">
              <span className="salesAgent-name">{product.salesAgent}</span>
              <span className="salesAgent">Sales Agent</span>
            </div>
          </div>
          <div className="review">{product.review}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
