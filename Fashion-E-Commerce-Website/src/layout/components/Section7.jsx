import React from 'react'
import "../../assets/css/components/Section7.css"
import dress from "../../assets/images/dress.jpeg"
import plant from "../../assets/images/plant.jpeg"

const Section7 = () => {
    return (
          <div className="container-section7">
            <div className="item">
            <h3>Our Holiday Gift Picks</h3>
              <img src={dress} alt="sweater" />
              
              <p>The best presents for everyone on your list.</p>
              <button>Read More</button>
            </div>
            <div className="item">
            <h3>Cleaner Fashion</h3>
              <img src={plant} alt="cotton" />
              <p>See the sustainability efforts behind each of our products.</p>
              <button>Learn More</button>
            </div>
          </div>
      );
}

export default Section7