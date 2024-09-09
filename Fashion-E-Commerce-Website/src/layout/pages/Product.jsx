import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "../../assets/css/pages/Product.css";
import ProductDetailsDisplay from "../components/ProductDetailsDisplay";
import products from "../../assets/data/productdata";
import ProductCard from "../components/ProductCard";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Product = () => {
  const { productname } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Extract size and category from query parameters
  const queryParams = new URLSearchParams(location.search);
  const initialSize = queryParams.get("size");
  const filteredCategory = queryParams.get("category");
  const filteredCategoryLowerCase = queryParams.get("category")?.toLowerCase();

  const filteredProducts = products
    .filter(
      (product) =>
        product.categories.includes(filteredCategory) &&
        product.name.toLowerCase().replace(/\s+/g, "-") !==
          productname.toLowerCase()
    )
    .slice(0, 4);

  return (
    <div>
      <div className="product-page">
        <div className="product-top">
          <span className="breadcrumb" onClick={() => navigate("/")}>
            Home
          </span>
          <span> &gt; </span>
          <span
            className="breadcrumb"
            onClick={() => navigate(`/${filteredCategoryLowerCase}`)}
          >
            {filteredCategory}
          </span>
          <span> &gt; </span>
          <span
            className="breadcrumb"
            onClick={() =>
              navigate(
                `/product${filteredCategoryLowerCase}/${productname
                  .replace(/\s+/g, "-")
                  .toLowerCase()}?size=${initialSize}&category=${filteredCategory}`
              )
            }
          >
            {capitalizeFirstLetter(productname)}
          </span>
        </div>
        <ProductDetailsDisplay
          productname={productname}
          initialSize={initialSize}
        />
        <div className="product-filterbycategory">
          <div className="product-filterbycategory-header">
            Recommended Products
          </div>
          <div>
            <div className="product-filterbycategory-display">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  filteredCategory={filteredCategory}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
