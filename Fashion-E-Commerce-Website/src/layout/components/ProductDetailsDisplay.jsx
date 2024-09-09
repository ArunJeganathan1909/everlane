import React, { useState } from "react";
import "../../assets/css/pages/Product.css";
import products from "../../assets/data/productdata";
import Cart from "./Cart";
import { FaRecycle } from "react-icons/fa";
import ImageDisplay from "./ImageDisplay";

const ProductDetailsDisplay = ({ productname, initialSize }) => {
  const product = products.find(
    (p) => p.name.replace(/\s+/g, "-").toLowerCase() === productname
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const {
    name,
    colors,
    originalPrice,
    offer,
    sizes,
    categories,
    shippingDetails,
    shippingPrice,
    model,
  } = product;

  const [selectedColor, setSelectedColor] = React.useState(
    colors[0]?.name || ""
  );

  const [selectedSize, setSelectedSize] = React.useState(initialSize || "");

  const [showCart, setShowCart] = useState(false);

  const [selectedMaterial, setSelectedMaterial] = React.useState(
    colors[0]?.materials[0]?.type || ""
  );

  const [showImageOverlay, setShowImageOverlay] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const adjustedPrice =
    selectedMaterial === "Handcrafted" ? originalPrice + 500 : originalPrice;

  const calculatedOfferPrice = offer
    ? adjustedPrice - (adjustedPrice * offer) / 100
    : adjustedPrice;

  const selectedColorData = colors.find(
    (color) => color.name === selectedColor
  );

  const selectedMaterialData = selectedColorData?.materials.find(
    (material) => material.type === selectedMaterial
  );

  const images = selectedColorData?.images || [];
  const quantities = selectedMaterialData?.quantities || {};
  const sizeQuantity = selectedSize ? quantities[selectedSize] : 0;

  const colorQuantity = Object.values(quantities).reduce(
    (acc, qty) => acc + qty,
    0
  );

  const handleSizeClick = (size) => {
    setSelectedSize((prevSize) => (prevSize === size ? "" : size));
  };

  const handleMaterialClick = (material) => {
    setSelectedMaterial(material);
  };

  const handleAddToCart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowImageOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowImageOverlay(false);
  };

  return (
    <div className="product-details-display">
      <div className="product-images-container">
        <div className="product-images-containerGrid">
          {images.map((image, index) => (
            <div
              key={index}
              className="product-images"
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image}
                alt={`${name} ${selectedColor}`}
                className="product-main-image"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="product-details-container">
        <div className="product-nameandprice">
          <div className="product-name">
            <span>{name}</span>
          </div>
          <div className="product-price">
            {offer && (
              <>
                <span className="productprice-original-show">
                  ${adjustedPrice.toFixed(2)}
                </span>
                <span className="productprice-offerprice">
                  ${calculatedOfferPrice.toFixed(2)}
                </span>
              </>
            )}
            {!offer && (
              <span className="productprice-original">
                ${adjustedPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
        <div className="product-color-contant">
          <div className="product-color-colorcontant">
            <span className="product-color">Color - {selectedColor}</span>
            <div className="product-color-cotainer">
              {colors.map((color) => (
                <div
                  key={color.name}
                  className={`product-productcolor ${
                    selectedColor === color.name ? "selected" : ""
                  }`}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => setSelectedColor(color.name)}
                >
                  <span
                    className="product-productcolorspan"
                    style={{ backgroundColor: color.hex }}
                  ></span>
                </div>
              ))}
            </div>
          </div>
          <span className="product-color-quantity">
            {colorQuantity > 0
              ? `Available quantity: ${colorQuantity}`
              : "Out of stock"}
          </span>
        </div>
        <div className="product-material-contant">
          <div className="product-material-materialcontant">
            <span className="product-material">
              Material - {selectedMaterial}
            </span>
          </div>
          <div className="product-material-cotainer">
            {selectedColorData?.materials.map((material) => (
              <div
                key={material.type}
                className={`product-material-item ${
                  selectedMaterial === material.type ? "selected" : ""
                }`}
                onClick={() => handleMaterialClick(material.type)}
              >
                <span>{material.type}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="product-sizeDetails">
          <div className="product-size-container">
            <div className="product-size-title">Size</div>
            <div className="product-size-guide">Size Guide</div>
          </div>
          <div className="product-sizeGuide-container"></div>
          <div className="product-size-list">
            {sizes.map((size) => (
              <div
                key={size}
                className={`product-sizes ${
                  selectedSize === size ? "selected" : ""
                }`}
                onClick={() => handleSizeClick(size)}
              >
                <span>{size}</span>
              </div>
            ))}
          </div>
          {selectedSize && (
            <span className="product-size-quantity">
              {sizeQuantity > 0 ? `In stock: ${sizeQuantity}` : "Out of stock"}
            </span>
          )}
        </div>
        <div className="product-addtocart">
          <div className="add-to-cart">
            <button className="add-to-cart-button" onClick={handleAddToCart}>
              ADD TO BAG
            </button>
          </div>
        </div>
        <div className="product-categories">
          <div className="product-categories-heading">
            <span>Categories</span>
          </div>
          <div className="product-category">
            {categories.map((category, index) => (
              <span key={category}>
                {category}
                {index < categories.length - 1 ? ", " : ""}
              </span>
            ))}
          </div>
        </div>
        <div className="product-shipping">
          <div className="product-shipping-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
          </div>
          <div className="product-shipping-contant">
            <div className="product-shipping-details">{shippingDetails}</div>
            <div className="product-shipping-price">${shippingPrice}</div>
          </div>
        </div>
        <div className="product-model">
          <div className="product-model-container">
            <div className="product-model-details">Model</div>
            <div className="product-model-contant">{model}</div>
          </div>
        </div>
        <div className="product-model">
          <div className="product-model-container">
            <div className="product-model-details">Fit</div>
            <div className="product-model-contant">
              <span>Questions about fit?</span>
              <span>Contact Us</span>
              <span>Size Guide</span>
            </div>
          </div>
        </div>
        <div className="product-sutainability">
          <div className="product-sutainability-header">
            <span>Sustainability</span>
          </div>
          <div className="product-sutainability-contant">
            <div className="product-sutainability-container">
              <div className="product-sutainability-containericon">
                <FaRecycle className="recycle-icon " />
              </div>
              <div className="product-sutainability-containerdetail">
                <span>RENEWED MATERIALS</span>
              </div>
            </div>
            <div className="product-sutainability-container">
              <div className="product-sutainability-containericon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                  />
                </svg>
              </div>
              <div className="product-sutainability-containerdetail">
                <span>CLEANER CHEMISTRY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showCart && (
        <div className="cart-overlay">
          <Cart onClose={handleCloseCart} />
        </div>
      )}
      {showImageOverlay && (
        <ImageDisplay
          images={images}
          selectedImage={selectedImage}
          onClose={handleCloseOverlay}
        />
      )}
    </div>
  );
};

export default ProductDetailsDisplay;
