import React, { useState } from "react";
import "../../assets/css/components/Cart.css"; // Ensure you have styles for cart
import cartProductsData from "../../assets/data/cartdata"; // Import your data

const Cart = ({ onClose }) => {
  const [cartProducts, setCartProducts] = useState(cartProductsData);

  const handleQuantityChange = (index, change) => {
    setCartProducts((prevProducts) => {
      const newProducts = [...prevProducts];
      const product = newProducts[index];
      const newQuantity = Math.max(1, (product.orderProduct || 1) + change);
      product.orderProduct = newQuantity;
      return newProducts;
    });
  };

  const getSubtotal = () => {
    return cartProducts
      .reduce((total, product) => {
        // Check if the material type is "Handcrafted" and adjust the price accordingly
        const materialType = product.color?.material?.type;
        const adjustedPrice =
          materialType === "Handcrafted"
            ? product.originalPrice + 500
            : product.originalPrice;

        const price = product.offer
          ? adjustedPrice - (adjustedPrice * product.offer) / 100
          : adjustedPrice;

        return total + price * (product.orderProduct || 1);
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="cart-dropdown">
      <div>
        <button className="cart-close-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="cart-content">
        <div className="cart-content-title">
          <span>Your Cart</span>
        </div>
        {cartProducts.map((product, index) => {
          const materialType = product.color?.material?.type;
          const adjustedPrice =
            materialType === "Handcrafted"
              ? product.originalPrice + 500
              : product.originalPrice;

          const price = product.offer
            ? adjustedPrice - (adjustedPrice * product.offer) / 100
            : adjustedPrice;
          return (
            <div key={index} className="cart-product-details">
              <div className="cart-product-image">
                <img src={product.color.image} alt="" />
              </div>
              <div className="cart-product-content">
                <div className="cart-product-titlecontent">
                  <div className="cart-product-title">
                    <span className="cart-product-name">{product.name}</span>
                    <span className="cart-product-size">
                      {product.color.size} | {product.color.name} |{" "}
                      {product.color.material.type}
                    </span>
                  </div>
                  <div className="remove-product">
                    <button className="remove-product-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="cart-product-pricecontent">
                  <div className="cart-product-priceArea">
                    {product.offer && (
                      <>
                        <div className="cart-product-pricedetails">
                          <span className="cart-product-originalprice">
                            ${adjustedPrice.toFixed(2)}
                          </span>
                          <span className="cart-product-price">
                            ${price.toFixed(2)}
                          </span>
                        </div>
                        <div className="cart-product-offerdetails">
                          <span>({product.offer}% Off)</span>
                        </div>
                      </>
                    )}
                    {!product.offer && (
                      <div className="cart-product-pricedetails">
                        <span className="cart-product-price">
                          ${price.toFixed(2)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="cart-product-quantityArea">
                    <button
                      className="quantity-button"
                      onClick={() => handleQuantityChange(index, -1)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 12h14"
                        />
                      </svg>
                    </button>
                    <span className="cart-product-quantity">
                      {product.orderProduct || 1}
                    </span>
                    <button
                      className="quantity-button"
                      onClick={() => handleQuantityChange(index, 1)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="checkout-content">
        <div className="checkout-content-priceArea">
          <div className="checkout-subtotal-noOfProduct">
            <span className="checkout-subtotal">Subtotal</span>
            <span className="checkout-noOfProduct">
              ({cartProducts.length} items)
            </span>
          </div>
          <div className="checkout-subtotal-price">${getSubtotal()}</div>
        </div>
        <div className="checkout-button-content">
          <button className="checkout-button">CONTINUE TO CHECKOUT</button>
        </div>
        <div className="checkout-quote">
          <span>Fast, get it now before it sells out.</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
