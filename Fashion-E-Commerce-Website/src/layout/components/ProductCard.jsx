import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/components/ProductCard.css";

const ProductCard = ({ product, filteredCategory }) => {
  const { offer, originalPrice, name, colors, sizes, categories } = product;
  const [selectedColor, setSelectedColor] = useState(colors[0]?.name || "");
  const [selectedSize, setSelectedSize] = useState(sizes[0] || "");
  const [category, setCategory] = useState(filteredCategory);

  useEffect(() => {
    if (!category) {
      if (categories.includes("Women")) {
        setCategory("Women");
      } else if (categories.includes("Men")) {
        setCategory("Men");
      } else if (categories.includes("Unisex")) {
        setCategory("Unisex");
      }
    }
  }, [category, categories]);

  const calculatedOfferPrice = offer
    ? originalPrice - (originalPrice * offer) / 100
    : originalPrice;

  const selectedColorData = colors.find(
    (color) => color.name === selectedColor
  );
  const image = selectedColorData?.images[0] || "";

  const productLink = `/product${category}/${name
    .replace(/\s+/g, "-")
    .toLowerCase()}?size=${encodeURIComponent(
    selectedSize
  )}&category=${encodeURIComponent(category)}`;

  return (
    <div className="productCard-container">
      <Link to={productLink} className="product-link">
        {offer && (
          <div className="product-offer-container">
            <span className="product-offer">{offer}% off</span>
          </div>
        )}
        <img src={image} alt={name} className="product-image" />
      </Link>
      <div className="productcard-productdetails">
        <div className="productcard-details">
          <span>{name}</span>
        </div>
        <div className="productcard-productprice">
          {offer && (
            <>
              <span className="productprice-original-show">
                ${originalPrice.toFixed(2)}
              </span>
              <span className="productprice-offerprice">
                ${calculatedOfferPrice.toFixed(2)}
              </span>
            </>
          )}
          {!offer && (
            <span className="productprice-original">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
      <div className="productcard-size-contant">
        <div className="productcard-size-container">
          {sizes.map((size) => (
            <span
              key={size}
              className={`productcard-size ${
                selectedSize === size ? "selected" : ""
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
