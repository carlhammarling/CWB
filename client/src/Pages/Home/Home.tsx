import React, { useEffect, useState } from "react";
import "./Home.scss";
import Hero from "../../Components/Templates/Hero/Hero";
import CoffeeDivider from "../../Components/Organisms/CoffeeDivider/CoffeeDivider";
import TuktukDivider from "../../Components/Organisms/TuktukDivider/TuktukDivider";
import CardWrapper from "../../Components/Templates/CardWrapper/CardWrapper";

const Home = () => {
 
  return (
    <div className="home">
      <Hero />
      <CardWrapper />
      <TuktukDivider />
      <CardWrapper />
      <CoffeeDivider />
      <CardWrapper />
    </div>
  );
};

export default Home;
