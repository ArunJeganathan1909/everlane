import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/css/components/Section2.css";
import shirt from "../../assets/images/shirt.jpg";;
import denim from "../../assets/images/denim.jpg";
import tees from "../../assets/images/tees.jpeg";
import pant from "../../assets/images/pant.jpeg";
import outerwear from "../../assets/images/outerwear.jpg";
import sweater from "../../assets/images/sweater.jpg";

const categories = [
  { name: "SHIRTS", img: shirt, link: "/shirts" },
  { name: "DENIM", img: denim, link: "/denim" },
  { name: "TEES", img: tees, link: "/tees" },
  { name: "PANTS", img: pant, link: "/pants" },
  { name: "SWEATERS", img: sweater, link: "/sweaters" },
  { name: "OUTERWEAR", img: outerwear, link: "/outerwear" },
];

const Section2 = () => {
  return (
    <div className="container">
      <h1>Shop by Category</h1>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div className="category" key={index}>
            <Link to={category.link}>
              <img src={category.img} alt={category.name} />
            </Link>
            <Link to={category.link}>
              <h2>{category.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section2;
