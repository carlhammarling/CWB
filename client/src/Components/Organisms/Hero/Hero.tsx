import React from "react";
import "./Hero.scss";
import TransparentBanner from "../../molecules/TransparentBanner/TransparentBanner";

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroLogo">
        <h1 className="heroHeader">
          COWORKING <span>BANGKOK</span>
        </h1>
      </div>
      <div className="liftBanner">
        <TransparentBanner />
      </div>
    </div>
  );
};

export default Hero;
