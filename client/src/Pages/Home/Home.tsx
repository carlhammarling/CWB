import React, { useEffect, useState } from "react";
import "./Home.scss";
import Hero from "../../Components/Organisms/Hero/Hero";
import CoffeeDivider from "../../Components/Atoms/CoffeeDivider/CoffeeDivider";
import TuktukDivider from "../../Components/Organisms/TuktukDivider/TuktukDivider";
import CardWrapper from "../../Components/Organisms/CardWrapper/CardWrapper";
import { useDataContext } from "../../Context/DataContext";
import { ClipLoader } from "react-spinners";
import { arraySlicer } from "../../Utils/ArraySlicer";

const Home = () => {
  const { coworkingSpaces } = useDataContext();

  if (!coworkingSpaces)
    return (
      <div className="home">
        <Hero />
        <div className="loader">
          <ClipLoader />
        </div>
      </div>
    );

  const dividedCoworkingSpaces: CoworkingSpace[][] = arraySlicer(
    coworkingSpaces,
    3
  );

  return (
    <div className="home">
      <Hero />
      {dividedCoworkingSpaces &&
        dividedCoworkingSpaces.map((chunk, index) => (
          <div className="dividedSection" key={index}>
            <CardWrapper coworkingSpaces={chunk} />
            {index < dividedCoworkingSpaces.length - 1 &&
              (index % 2 === 0 ? <TuktukDivider /> : <CoffeeDivider />)}
          </div>
        ))}
    </div>
  );
};

export default Home;
