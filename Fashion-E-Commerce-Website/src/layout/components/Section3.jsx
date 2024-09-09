import React from 'react'
import "../../assets/css/components/Section3.css"
import newarrivals from "../../assets/images/newarrivals.jpg"
import bestsellers from "../../assets/images/bestsellers.jpg"
import holidayoutfit from "../../assets/images/holidayoutfit.jpg"

const Section3 = () => {
    return (
        <div className="container-section3">
          <div className="card">
            <img src={newarrivals} alt="New Arrivals" />
            <div className="card-content">
              <h3>New Arrivals</h3>
              <button>Shop the Latest</button>
            </div>
          </div>
          <div className="card">
            <img src={bestsellers} alt="Best-Sellers" />
            <div className="card-content">
              <h3>Best-Sellers</h3>
              <button>Shop Your Favorites</button>
            </div>
          </div>
          <div className="card">
            <img src={holidayoutfit} alt="The Holiday Outfit" />
            <div className="card-content">
              <h3>The Holiday Outfit</h3>
              <button>Shop Occasion</button>
            </div>
          </div>
        </div>
      );
}

export default Section3