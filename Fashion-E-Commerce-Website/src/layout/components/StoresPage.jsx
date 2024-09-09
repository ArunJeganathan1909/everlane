import React from "react";
import "../../assets/css/components/StoresPage.css";
import stores from "../../assets/data/storesdata";

const StoresPage = () => {
  // Handle click event to redirect to store location
  const handleClick = (locationLink) => {
    if (locationLink) {
      window.open(locationLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="storesPage">
      <div className="storesPage-header">
        Find one of our 9 stores nearest you.
      </div>
      <div className="storesPage-stores-container">
        <div className="storesPage-stores">
          {stores.map((store, index) => (
            <div className="storesPage-store" key={index}>
              <div
                className="storesPage-store-image"
                onClick={() => handleClick(store.locationLink)}
              >
                <img
                  src={store.image}
                  alt={store.cityName}
                  className="storesPage-store-img"
                />
              </div>
              <div className="storesPage-store-cityName">
                <span>{store.cityName}</span>
              </div>
              <div className="storesPage-store-streetName">
                <span>{store.streetName}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoresPage;
