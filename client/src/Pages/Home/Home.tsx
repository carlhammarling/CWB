import React from "react";
import Hero from "../../Components/Templates/Hero/Hero";
import TransparentBanner from "../../Components/Molecules/TransparentBanner/TransparentBanner";
import CoffeeDivider from "../../Components/Molecules/CoffeeDivider/CoffeeDivider";
import TuktukDivider from "../../Components/Molecules/TuktukDivider/TuktukDivider";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <TuktukDivider />
      <CoffeeDivider />
      <TuktukDivider />

    </div>
  );
};

export default Home;
