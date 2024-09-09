import React, { useCallback, useState } from "react";
import "../../assets/css/components/FilterSection.css";

const SearchAreaFilter = ({
  totalProducts,
  minPrice,
  maxPrice,
  newSelectedShortBy,
  onShortByChange,
  onSizeChange,
  onCategoryChange,
  onColorChange,
  onPriceRangeChange,
  onGenderchange,
}) => {
  const categories = [
    "Everyone - All Gender",
    "Shirts",
    "Casual collection",
    "Formal collection",
    "Official",
    "Outdoor collection",
    "Beach ",
  ];
  const colors = [
    { name: "Red", hex: "#FF0000" },
    { name: "Green", hex: "#00FF00" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Yellow", hex: "#FFFF00" },
    { name: "Brown", hex: "#A52A2A" },
    { name: "Black", hex: "#000000" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Purple", hex: "#800080" },
    { name: "Gray", hex: "#808080" },
  ];
  const waistSizes = [36, 38, 40, 42, 44, 46, 48, 50];
  const clothingSizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"];

  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedWaistSizes, setSelectedWaistSizes] = useState([]);
  const [selectedClothingSizes, setSelectedClothingSizes] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedShortBy, setSelectedShortBy] = useState("Feature(Deafult)");
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedGender, setSelectedGender] = useState(null);

  const [isShortByVisible, setIsShortByVisible] = useState(true);
  const [isGenderVisible, setIsGenderVisible] = useState(false);
  const [isCategoryVisible, setIsCategoryVisible] = useState(false);
  const [isColorVisible, setIsColorVisible] = useState(false);
  const [isSizeVisible, setIsSizeVisible] = useState(false);
  const [isPriceRangeVisible, setIsPriceRangeVisible] = useState(false);

  const toggleColorSelection = (color) => {
    setSelectedColors((prevSelectedColors) => {
      const updatedColors = prevSelectedColors.includes(color)
        ? prevSelectedColors.filter((c) => c !== color)
        : [...prevSelectedColors, color];

      // Call onColorChange with the updated colors
      onColorChange(updatedColors);

      return updatedColors;
    });
  };

  const toggleCategorySelection = (category) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter((c) => c == category)
        : [...prevSelectedCategories, category]
    );
    onCategoryChange(selectedCategories);
  };

  const toggleWaistSizeSelection = useCallback(
    (size) => {
      setSelectedWaistSizes((prevSelectedSizes) => {
        const updatedSizes = prevSelectedSizes.includes(size)
          ? prevSelectedSizes.filter((s) => s !== size)
          : [...prevSelectedSizes, size];

        // Call onSizeChange with the updated sizes
        onSizeChange({
          waistSizes: updatedSizes,
          clothingSizes: selectedClothingSizes,
        });

        return updatedSizes;
      });
    },
    [selectedClothingSizes, onSizeChange]
  );

  const toggleClothingSizeSelection = useCallback(
    (size) => {
      setSelectedClothingSizes((prevSelectedSizes) => {
        const updatedSizes = prevSelectedSizes.includes(size)
          ? prevSelectedSizes.filter((s) => s !== size)
          : [...prevSelectedSizes, size];

        // Call onSizeChange with the updated sizes
        onSizeChange({
          waistSizes: updatedSizes,
          clothingSizes: selectedClothingSizes,
        });

        return updatedSizes;
      });
    },
    [selectedClothingSizes, onSizeChange]
  );

  const handlePriceRangeSelection = (range) => {
    setSelectedPriceRanges((prevSelectedRanges) =>
      prevSelectedRanges.includes(range)
        ? prevSelectedRanges.filter((r) => r !== range)
        : [...prevSelectedRanges, range]
    );
    onPriceRangeChange(selectedPriceRanges);
  };

  const toggleGenderSelection = (gender) => {
    setSelectedGender((prevSelectedGender) =>
      prevSelectedGender === gender ? null : gender
    );
    onGenderChange(selectedGender);
  };

  const generatePriceRanges = () => {
    let ranges = [];
    for (let price = minPrice; price <= maxPrice; price += 20) {
      ranges.push(`${price.toFixed(2)} - ${(price + 20).toFixed(2)}`);
    }
    return ranges;
  };

  const toggleShortByVisibility = () => {
    setIsShortByVisible(!isShortByVisible);
  };

  const toggleGenderVisibility = () => {
    setIsGenderVisible(!isGenderVisible);
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const toggleCategoryVisibility = () => {
    setIsCategoryVisible(!isCategoryVisible);
  };

  const toggleColorVisibility = () => {
    setIsColorVisible(!isColorVisible);
  };

  const toggleSizeVisibility = () => {
    setIsSizeVisible(!isSizeVisible);
  };

  const togglePriceRangeVisibility = () => {
    setIsPriceRangeVisible(!isPriceRangeVisible);
  };

  const handleShortByChange = (option) => {
    setSelectedShortBy(option);
    onShortByChange(option);
  };

  return (
    <div className="filter-section">
      <div className="filter-section-header">
        <div className="filter-section-headerSpan">
          <span>Filter Your Product</span>
        </div>
        <div
          className="filter-section-headerIcon"
          onClick={toggleFilterVisibility}
        >
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
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
            />
          </svg>
        </div>
      </div>
      <div
        className={`filter-section-container ${
          isFilterVisible ? "visible" : ""
        }`}
      >
        <div className="filter-section-totalProducts">
          <div className="filter-totalProducts"> Products: {totalProducts}</div>
        </div>
        <div className="filter-section-shortby">
          <div
            className="filter-shortby-header"
            onClick={toggleShortByVisibility}
          >
            <span>Short By</span>
            <div className="filter-section-icon">
              {isShortByVisible ? (
                <div className="filter-section-shortby-upicon">
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
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </div>
              ) : (
                <div className="filter-section-shortby-downicon">
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
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
          {isShortByVisible && (
            <div className="shortby-container">
              {[
                "Feature(Deafult)",
                "Newests",
                "Price-low to high",
                "Price-high to low",
              ].map((option) => (
                <div key={option} className="shortby-item">
                  <input
                    type="radio"
                    id={`shortby-${option}`}
                    name="shortby"
                    value={option}
                    checked={newSelectedShortBy === option}
                    onChange={() => handleShortByChange(option)}
                  />
                  <label htmlFor={`shortby-${option}`}>{option}</label>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="filter-section-gender">
          <div
            className="filter-gender-header"
            onClick={toggleGenderVisibility}
          >
            <span>Gender</span>
            <div className="filter-section-icon">
              {isGenderVisible ? (
                <div className="filter-section-gender-upicon">
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
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </div>
              ) : (
                <div className="filter-section-gender-downicon">
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
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
          {isGenderVisible && (
            <div className="filter-gender-options">
              {["Men", "Women", "Unisex"].map((gender) => (
                <div
                  key={gender}
                  className={`filter-gender-option ${
                    selectedGender === gender ? "selected" : ""
                  }`}
                  onClick={() => toggleGenderSelection(gender)}
                >
                  {gender}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="filter-section-category">
          <div
            className="filter-category-header"
            onClick={toggleCategoryVisibility}
          >
            <span>Category</span>
            <div className="filter-section-icon">
              {isCategoryVisible ? (
                <div className="filter-section-category-upicon">
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
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </div>
              ) : (
                <div className="filter-section-category-downicon">
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
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
          {isCategoryVisible && (
            <div className="filter-category-container">
              {categories.map((category, index) => (
                <div key={index} className="filter-category-item">
                  <input
                    type="checkbox"
                    id={`category-${index}`}
                    name="category"
                    value={category}
                    onClick={() => toggleCategorySelection({ category })}
                  />
                  <label htmlFor={`category-${index}`}>{category}</label>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="filter-section-colorContainer">
          <div className="filter-color-header" onClick={toggleColorVisibility}>
            <span>Color</span>
            <div className="filter-section-icon">
              {isColorVisible ? (
                <div className="filter-section-color-upicon">
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
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </div>
              ) : (
                <div className="filter-section-color-downicon">
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
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
          {isColorVisible && (
            <div className="filter-color-container">
              {colors.map((color) => (
                <div
                  key={color.name}
                  className={`filter-color-productcolor ${
                    selectedColors.includes(color.name) ? "selected" : ""
                  }`}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => toggleColorSelection(color.name)}
                >
                  <span
                    className="filter-color-colorspan"
                    style={{ backgroundColor: color.hex }}
                  ></span>
                  <span className="filter-color-colorname">{color.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="filter-section-sizeContainer">
          <div className="filter-size-header" onClick={toggleSizeVisibility}>
            <span>Size</span>
            <div className="filter-section-icon">
              {isSizeVisible ? (
                <div className="filter-section-size-upicon">
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
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </div>
              ) : (
                <div className="filter-section-size-downicon">
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
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
          {isSizeVisible && (
            <div className="filter-size-container">
              <div className="filter-size-waist">
                <div className="filter-size-waistHeader">
                  <span>Waist</span>
                </div>
                <div className="filter-size-waistContainer">
                  {waistSizes.map((size) => (
                    <div
                      key={size}
                      className={`filter-size-item ${
                        selectedWaistSizes.includes(size) ? "selected" : ""
                      }`}
                      onClick={() => toggleWaistSizeSelection(size)}
                    >
                      <span>{size}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="filter-size-clothing">
                <div className="filter-size-clothingHeader">
                  <span>Clothing Size</span>
                </div>
                <div className="filter-size-clothingContainer">
                  {clothingSizes.map((size) => (
                    <div
                      key={size}
                      className={`filter-size-item ${
                        selectedClothingSizes.includes(size) ? "selected" : ""
                      }`}
                      onClick={() => toggleClothingSizeSelection(size)}
                    >
                      <span>{size}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="filter-section-priceContainer">
          <div
            className="filter-size-header"
            onClick={togglePriceRangeVisibility}
          >
            <span>Price Range</span>
            <div className="filter-section-icon">
              {isPriceRangeVisible ? (
                <div className="filter-section-size-upicon">
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
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </div>
              ) : (
                <div className="filter-section-size-downicon">
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
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
          {isPriceRangeVisible && (
            <div className="filter-priceRange-checkboxContainer">
              {generatePriceRanges().map((range) => (
                <div key={range} className="filter-priceRange-item">
                  <input
                    type="checkbox"
                    id={`priceRange-${range}`}
                    name="priceRange"
                    value={range}
                    checked={selectedPriceRanges.includes(range)}
                    onChange={() => handlePriceRangeSelection(range)}
                  />
                  <label htmlFor={`priceRange-${range}`}>{range}</label>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="filter-section-actions">
          <button>Clear</button>
          <button>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default SearchAreaFilter;
