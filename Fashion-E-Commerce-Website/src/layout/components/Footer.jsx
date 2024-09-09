import React from "react";
import "../../assets/css/components/Footer.css";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="row">
          <div className="col-md-3">
            <h4>Account</h4>
            <ul>
              <li>
                <a href="#">Log In</a>
              </li>
              <li>
                <a href="#">Sign Up</a>
              </li>
              <li>
                <a href="#">Redeem a Gift Card</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Environmental Initiatives</a>
              </li>
              <li>
                <a href="#">Factories</a>
              </li>
              <li>
                <a href="#">DEI</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">International</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Get Help</h4>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Return Policy</a>
              </li>
              <li>
                <a href="#">Shipping Info</a>
              </li>
              <li>
                <a href="#">Bulk Orders</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Affiliates</a>
              </li>
              <li>
                <a href="#">Out Stores</a>
              </li>
            </ul>
          </div>
          <div className="email-signup">
            <input type="email" placeholder="Email Address" />
            <button className="signup-button">
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="row-copyright">
          <div className="col-md-12">
            <div className="condition">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Do Not Sell or Share My Personal Information</a> 
              <a href="#">CS Supply Chain Transparency</a> 
              <a href="#">Vendor Code of Conduct</a> 
              <a href="#">Sitemap Pages</a> 
              <a href="#">Sitemap Products</a>
            </div>
            <p className="copyright">© 2023 All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
