import React, { useState } from "react";
import "../../assets/css/pages/SearchPage.css";
import products from "../../assets/data/productdata";
import SearchAreaFilterProduct from "../components/SearchAreaFilterProduct";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredProducts = products.filter((product) => {
      const productName = product.name.toLowerCase();
      const shippingDetails = product.shippingDetails.toLowerCase();
      const colorNames = product.colors.map((color) =>
        color.name.toLowerCase()
      );
      const materialTypes = product.colors.map((color) =>
        color.materials.map((material) => material.type.toLowerCase())
      );
      const categories = product.categories.map((category) =>
        category.toLowerCase()
      );

      return (
        productName.includes(query) ||
        shippingDetails.includes(query) ||
        colorNames.some((colorName) => colorName.includes(query)) ||
        materialTypes.some((materialType) => materialType.flat().includes(query)) ||
        categories.some((category) => category.includes(query))
      );
    });

    setFilteredProducts(filteredProducts);
  };

  return (
    <div className="search-page">
      <div className="search-area">
        <div className="search-area-container">
          <div className="search-input-container">
            <form action="">
              <input
                type="text"
                className="search-input-box"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearch}
              />
            </form>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 cross-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <button className="search-area-cancel">Cancel</button>
        </div>
      </div>

      {searchQuery ? (
        <SearchAreaFilterProduct filteredProducts={filteredProducts} searchQuery = {searchQuery} />
      ) : (
        <div className="spotlight">
            <div>0 products showing </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
