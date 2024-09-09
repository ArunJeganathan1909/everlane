import React, { useState, useEffect } from "react";
import SearchAreaFilter from "./SearchAreaFilter";
import ProductCard from "./ProductCard";

const SearchAreaFilterProduct = ({ filteredProducts, searchQuery }) => {
  const [sortOption, setSortOption] = useState("Feature(Deafult)");
  const [sortedProducts, setSortedProducts] = useState(filteredProducts);
  const [selectedSizes, setSelectedSizes] = useState({
    waistSizes: [],
    clothingSizes: [],
  });
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedGender, setSelectedGender] = useState();

  const totalProducts = filteredProducts.length;
  const prices = filteredProducts.map((product) => product.originalPrice);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  // Effect to handle sorting based on selected option
  useEffect(() => {
    let sorted = [...filteredProducts];
    switch (sortOption) {
      case "Price-low to high":
        sorted.sort((a, b) => a.originalPrice - b.originalPrice);
        break;
      case "Price-high to low":
        sorted.sort((a, b) => b.originalPrice - a.originalPrice);
        break;
      // Add more sorting conditions if needed
      default:
        // Default sorting or no sorting
        break;
    }
    setSortedProducts(sorted);
  }, [sortOption, filteredProducts]);

  useEffect(() => {
    let filtered = [...filteredProducts];
    if (selectedSizes.waistSizes.length > 0) {
      filtered = filtered.filter((product) =>
        product.sizes.some((size) => selectedSizes.waistSizes.includes(size))
      );
    }
    if (selectedSizes.clothingSizes.length > 0) {
      filtered = filtered.filter((product) =>
        product.sizes.some((size) => selectedSizes.clothingSizes.includes(size))
      );
    }
    setSortedProducts(filtered);
  }, [selectedSizes, filteredProducts]);

  // Effect to handle filtering based on selected categories
  useEffect(() => {
    let filtered = [...filteredProducts];
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        product.categories.some((category) =>
          selectedCategories.includes(category)
        )
      );
    }
    setSortedProducts(filtered);
  }, [selectedCategories, filteredProducts]);

  useEffect(() => {
    let filtered = [...filteredProducts];
    if (selectedGender) {
      filtered = filtered.filter((product) => product.gender === selectedGender);
    }
    setSortedProducts(filtered);
  }, [selectedGender, filteredProducts]);

  // Effect to handle filtering based on selected colors
  useEffect(() => {
    let filtered = [...filteredProducts];
    if (selectedColors.length > 0) {
      filtered = filtered.filter((product) =>
        product.colors.some((color) => selectedColors.includes(color.name))
      );
    }
    setSortedProducts(filtered);
  }, [selectedColors, filteredProducts]);

  // Effect to handle filtering based on selected price ranges
  useEffect(() => {
    let filtered = [...filteredProducts];
    if (selectedPriceRanges.length > 0) {
      filtered = filtered.filter((product) => {
        const productPrice = product.originalPrice;
        return selectedPriceRanges.some((range) => {
          const [min, max] = range.split(" - ");
          return (
            productPrice >= parseFloat(min) && productPrice <= parseFloat(max)
          );
        });
      });
    }
    setSortedProducts(filtered);
  }, [selectedPriceRanges, filteredProducts]);

  return (
    <div className="category-product-view">
      <div className="category-component">
        <SearchAreaFilter
          totalProducts={totalProducts}
          minPrice={minPrice}
          maxPrice={maxPrice}
          newSelectedShortBy={sortOption}
          onShortByChange={setSortOption}
          onSizeChange={setSelectedSizes}
          onCategoryChange={setSelectedCategories}
          onGenderChange={(gender) => setSelectedGender(gender)}
          onColorChange={setSelectedColors}
          onPriceRangeChange={setSelectedPriceRanges}
        />
      </div>
      <div className="product-cards-container">
        <div className="productcards-title flex justify-between">
          <span>Search Results for "{searchQuery}"</span>
          <div>{totalProducts} products showing</div>
        </div>
        <div className="product-display-container">
          <div className="product-display">
            {sortedProducts.map((product, index) => (
              <ProductCard key={index} product={product} filteredCategory="" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchAreaFilterProduct;
