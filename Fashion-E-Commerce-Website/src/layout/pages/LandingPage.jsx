import React from "react";
import "../../assets/css/pages/LandingPage.css";
import Satrtup from "../components/Startup";
import Section9 from "../components/Section9";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section7 from "../components/Section7";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="landing-startup">
        <Satrtup />
      </div>
      <div className="landing-sections">
        <Section2 />
      </div>
      
      <div className="landing-sections">
        <Section3 />
      </div>
      <div className="landing-sections">
        <Section4 />
      </div>
      <div className="landing-sections">
        <Section5 />
      </div>
      <div className="landing-sections">
        <Section6 />
      </div>
      <div className="landing-sections">
        <Section7 />
      </div>
      <div className="landing-sections">
        <Section9 />
      </div>
    </div>
  );
};

export default LandingPage;
