import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "../../assets/css/pages/CategoriesProductView.css";
import FilterSection from "../components/FilterSection";
import products from "../../assets/data/productdata";

const Men = () => {
  const navigate = useNavigate();

  const filteredProducts = products.filter(
    (product) =>
      product.categories.includes("Men") ||
      product.categories.includes("Unisex")
  );

  const totalProducts = filteredProducts.length;

  const prices = filteredProducts.map((product) => product.originalPrice);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  return (
    <div>
      <div className="category-product-view">
        <div className="category-component">
          <FilterSection
            totalProducts={totalProducts}
            minPrice={minPrice}
            maxPrice={maxPrice}
          />
        </div>
        <div className="product-cards-container">
          <div className="product-cards-title">
            <div className="product-cards-path">
              <span className="breadcrumb" onClick={() => navigate("/")}>
                Home
              </span>
              <span>&gt;</span>
              <span className="breadcrumb" onClick={() => navigate("/men")}>
                Men
              </span>
            </div>
            <span className="product-filter-heading">
              Men's Clothing & Apparel
            </span>
          </div>
          <div className="product-display-container">
            <div className="product-display">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  filteredCategory="Men"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Men;
