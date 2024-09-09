import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "../../assets/css/pages/AboutPage.css";

const AboutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (page) => {
    navigate(`/about/${page}`);
  };

  const isActive = (page) => {
    return (
      location.pathname === `/about/${page}` ||
      (page === "aboutUs" && location.pathname === "/about")
    );
  };

  return (
    <div className="aboutpage">
      <div className="aboutpage-header">
        <div
          className={`aboutpage-header-content ${
            isActive("aboutUs") ? "active" : ""
          }`}
          onClick={() => handleClick("aboutUs")}
        >
          About Us
        </div>
        <div
          className={`aboutpage-header-content ${
            isActive("stores") ? "active" : ""
          }`}
          onClick={() => handleClick("stores")}
        >
          Stores
        </div>
        <div
          className={`aboutpage-header-content ${
            isActive("everworldStories") ? "active" : ""
          }`}
          onClick={() => handleClick("everworldStories")}
        >
          Everworld Stories
        </div>
      </div>
      <div className="aboutpage-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AboutPage;
