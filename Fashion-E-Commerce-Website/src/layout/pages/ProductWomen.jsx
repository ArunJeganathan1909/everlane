import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "../layout/pages/Product.css";
import ProductDetailsDisplay from "../components/ProductDetailsDisplay";

const ProductWomen = () => {
  const { productname } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Extract size from query parameters
  const queryParams = new URLSearchParams(location.search);
  const initialSize = queryParams.get("size");

  return (
    <div>
      <div className="product-page">
        <div className="product-top">
          <span className="breadcrumb" onClick={() => navigate("/")}>
            Home
          </span>
          <span> &gt; </span>
          <span className="breadcrumb" onClick={() => navigate("/women")}>
            Women
          </span>
          <span> &gt; </span>
          <span
            className="breadcrumb"
            onClick={() => navigate(`/productWomen/${productname}`)}
          >
            {productname.replace(/-/g, " ")}
          </span>
        </div>
        <ProductDetailsDisplay productname={productname} initialSize={initialSize}/>
      </div>
    </div>
  );
};

export default ProductWomen;
