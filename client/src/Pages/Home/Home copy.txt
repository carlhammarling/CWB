import React, { useEffect, useState } from "react";
import "./Home.scss";
import Hero from "../../Components/Templates/Hero/Hero";
import CoffeeDivider from "../../Components/Organisms/CoffeeDivider/CoffeeDivider";
import TuktukDivider from "../../Components/Organisms/TuktukDivider/TuktukDivider";
import CardWrapper from "../../Components/Templates/CardWrapper/CardWrapper";
import { useDataContext } from "../../Context/DataContext";

const Home = () => {
  const { coworkingSpaces } = useDataContext();

  const coworkingSpaces1 = coworkingSpaces?.slice(0, 3);
  const coworkingSpaces2 = coworkingSpaces?.slice(3, 6);
  const coworkingSpaces3 = coworkingSpaces?.slice(6, 9);


  return (
    <div className="home">
      <Hero />
      {coworkingSpaces1 && <CardWrapper coworkingSpaces={coworkingSpaces1} />}
      <TuktukDivider />
      {coworkingSpaces2 && <CardWrapper coworkingSpaces={coworkingSpaces2} />}
      <CoffeeDivider />
      {coworkingSpaces3 && <CardWrapper coworkingSpaces={coworkingSpaces3} />}
    </div>
  );
};

export default Home;
