import React from "react";
import "../../assets/css/components/AboutUsPage.css";
import image1 from "../../assets/images/img1.png";
import image2 from "../../assets/images/img2.png";
import image3 from "../../assets/images/img3.png";
import image4 from "../../assets/images/img4.png";

const AboutUsPage = () => {
  return (
    <div className="aboutus-page">
      <div className="section1">
        <div className="section1-image-container">
          <img src={image1} alt="" className="section1-image" />
        </div>
        <div className="section1-content">
          <span>We belive we can all make a difference.</span>
          <p>Our way: Exceptional quality.</p>
          <p>Ethical factories. Radical Transparency.</p>
        </div>
      </div>
      <div className="section2">
        <div className="section2-content">
        <span>
          At Everlane, we want the right choice to be as easy as putting on a
          great T-shirt. That’s why we partner with the best, ethical factories
          around the world. Source only the finest materials. And share those
          stories with you—down to the true cost of every product we make. It’s
          a new way of doing things. We call it Radical Transparency.
        </span>
        </div>
      </div>
      <div className="otherSections">
        <div className="otherSections-image-container">
          <img src={image2} alt="" />
        </div>
        <div className="otherSections-details-container">
          <div className="otherSections-details-containerContent">
            <div className="otherSections-details-topic1">
              <span>OUR FACTORIES</span>
            </div>
            <div className="otherSections-details-topic2">
              <span>Our ethical approach.</span>
            </div>
            <div className="otherSections-details-topic3">
              <span>
                We spend months finding the best factories around the world—the
                same ones that produce your favorite designer labels. We visit
                them often and build strong personal relationships with the
                owners. Each factory is given a compliance audit to evaluate
                factors like fair wages, reasonable hours, and environment. Our
                goal? A score of 90 or above for every factory.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="otherSections">
        <div className="otherSections-details-container">
          <div className="otherSections-details-containerContent">
            <div className="otherSections-details-topic1">
              <span>OUR QUALITY</span>
            </div>
            <div className="otherSections-details-topic2">
              <span>Designed to last.</span>
            </div>
            <div className="otherSections-details-topic3">
              <span>
                At Everlane, we’re not big on trends. We want you to wear our
                pieces for years, even decades, to come. That’s why we source
                the finest materials and factories for our timeless products—
                like our Grade-A cashmere sweaters, Italian shoes, and Peruvian
                Pima tees.
              </span>
            </div>
          </div>
        </div>
        <div className="otherSections-image-container">
          <img src={image3} alt="" />
        </div>
      </div>
      <div className="otherSections">
        <div className="otherSections-image-container">
          <img src={image4} alt="" />
        </div>
        <div className="otherSections-details-container">
          <div className="otherSections-details-containerContent">
            <div className="otherSections-details-topic1">
              <span>OUR PRICES</span>
            </div>
            <div className="otherSections-details-topic2">
              <span>Radically Transparent.</span>
            </div>
            <div className="otherSections-details-topic3">
              <span>
                We believe our customers have a right to know how much their
                clothes cost to make. We reveal the true costs behind all of our
                products—from materials to labor to transportation—then offer
                them to you, minus the traditional retail markup.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
