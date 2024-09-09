import React from "react";
import { BsBoxSeam } from "react-icons/bs";
import { FaRecycle } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import "../../assets/css/components/Section9.css";
import { Link } from "react-router-dom";

const Section9 = () => {
  return (
    <div className="features">
      <div className="feature">
        <Link to="/complimentryShiping">
          <BsBoxSeam className="icon" />
          <h3>Complimentary Shipping</h3>
          <p>Enjoy free shipping on U.S. orders over $100.</p>
        </Link>
      </div>
      <div className="feature">
        <Link to="/consciouslyCrafted">
          <FaRecycle className="icon" />
          <h3>Consciously Crafted</h3>
          <p>Designed with you and the planet in mind.</p>
        </Link>
      </div>
      <div className="feature">
        <Link to="/locations">
          <FiMapPin className="icon" />
          <h3>Come Say Hi</h3>
          <p>We have 11 stores across the U.S.</p>
        </Link>
      </div>
    </div>
  );
};

export default Section9;
