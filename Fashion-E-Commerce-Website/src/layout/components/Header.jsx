import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaArrowRight, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { RiMenuFold3Line2 } from "react-icons/ri";
import "../../assets/css/components/Header.css"
import usaFlag from "../../assets/images/usaflag.png"
import canadaFlag from "../../assets/images/canadaFlag.jpeg";
import ukFlag from "../../assets/images/ukFlag.jpeg";
import Cart from "../components/Cart"; 

const countries = [
  { name: "USA", flag: usaFlag, currency: "USD" },
  { name: "UK", flag: ukFlag, currency: "EUR" },
  { name: "Canada", flag: canadaFlag, currency: "CAD" },
];

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const navigate = useNavigate();
  const searchFormRef = useRef(null);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    } else {
      setShowSearch(false);
    }
  };

  const handleClickOutside = (e) => {
    if (searchFormRef.current && !searchFormRef.current.contains(e.target)) {
      setShowSearch(false);
    }
  };

  useEffect(() => {
    if (showSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearch]);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const handleNavLinkClick = () => {
    setShowMenu(false);
  };

  const handleCountryClick = () => {
    setShowCountryDropdown(!showCountryDropdown);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setShowCountryDropdown(false);
  };

  return (
    <div className="header-area">
      <div className="header-top">
        <div className="header-notification">
          Get early access on launches and offers
          <a href=""> Sign Up For Texts</a>
          <FaArrowRight />
        </div>
        <div className="contry-logo" onClick={handleCountryClick}>
          <span>{selectedCountry.currency}</span>
          <img src={selectedCountry.flag} alt={`${selectedCountry.name} Flag`} />
          {showCountryDropdown && (
            <div className="country-dropdown">
              {countries.map((country, index) => (
                <div 
                  key={index} 
                  className="country-option" 
                  onClick={() => handleCountrySelect(country)}
                >
                  <img src={country.flag} alt={`${country.name} Flag`} />
                  <span>{country.currency}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <nav className="navbar-container">
        <div className="header-container">
          {/* Mobile Menu Button */}
          <button className="menu-button" onClick={handleMenuClick}>
            <RiMenuFold3Line2 />
          </button>

          {/* Mobile Menu Links */}
          {showMenu && (
            <div className="mobile-menu-links">
              <form onSubmit={handleSearchSubmit} className="search-input-form mobile-search-form">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleInputChange}
                  className="search-input"
                  placeholder="Search..."
                />
                <button type="submit" className="header-icon-button">
                  <FaSearch />
                </button>
              </form>
              <NavLink 
                to="/women" 
                className={({ isActive }) => `mobile-menu-link ${isActive ? 'active-link' : ''}`}
                onClick={handleNavLinkClick} 
              >
                Women
              </NavLink>
              <NavLink 
                to="/men" 
                className={({ isActive }) => `mobile-menu-link ${isActive ? 'active-link' : ''}`}
                onClick={handleNavLinkClick} 
              >
                Men
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => `mobile-menu-link ${isActive ? 'active-link' : ''}`}
                onClick={handleNavLinkClick} 
              >
                About
              </NavLink>        
            </div>
          )}

          {/* Left Section */}
          <div className={`header-left ${showMenu ? "hide" : ""}`}>
            <NavLink
              to="/women"
              className={({ isActive }) =>
                `header-left-link ${isActive ? "active-link" : ""}`
              }
            >
              Women
            </NavLink>
            <NavLink
              to="/men"
              className={({ isActive }) =>
                `header-left-link ${isActive ? "active-link" : ""}`
              }
            >
              Men
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `header-left-link ${isActive ? "active-link" : ""}`
              }
            >
              About
            </NavLink>
          </div>

          {/* Center Section */}
          <div className="header-center">
            <Link to="/" className="header-center-link">
              EVERLANE
            </Link>
          </div>

          {/* Right Section */}
          <div className="header-right">
            <div className="search-container" ref={searchFormRef}>
              {!showSearch && (
                <button
                  onClick={handleSearchClick}
                  className="header-icon-button"
                >
                  <FaSearch />
                </button>
              )}
              {showSearch && (
                <form
                  onSubmit={handleSearchSubmit}
                  className="search-input-form"
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                    className="search-input"
                    placeholder="Search..."
                  />
                  <button type="submit" className="header-icon-button">
                    <FaSearch />
                  </button>
                </form>
              )}
            </div>
            <button onClick={handleCartClick} className="header-right-link">
              <FaShoppingCart />
            </button>
            {showCart && (
              <div className="cart-overlay">
                <Cart onClose={handleCloseCart} />
              </div>
            )}
            <Link to="/login" className="header-right-link">
              <FaUser />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
