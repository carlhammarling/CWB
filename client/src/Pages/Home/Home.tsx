import React, { useEffect, useState } from "react";
import "./Home.scss";
import Hero from "../../Components/Templates/Hero/Hero";
import CoffeeDivider from "../../Components/Organisms/CoffeeDivider/CoffeeDivider";
import TuktukDivider from "../../Components/Organisms/TuktukDivider/TuktukDivider";
import CardWrapper from "../../Components/Templates/CardWrapper/CardWrapper";
import { useDataContext } from "../../Context/DataContext";

const Home = () => {
  const { coworkingSpaces } = useDataContext();

  const divideCards = (array: CoworkingSpace[], cardsPerRow: number) => {
    const chunks: CoworkingSpace[][] = [];
    for (let i = 0; i < array.length; i += cardsPerRow) {
      chunks.push(array.slice(i, i + cardsPerRow));
    }
    return chunks;
  };

  if (!coworkingSpaces)
    return (
      <div className="home">
        <Hero />
        {/* Put in spinner */}
        <div>Loading...</div>
      </div>
    );

  const dividedCoworkingSpaces: CoworkingSpace[][] = divideCards(
    coworkingSpaces,
    3
  );

  return (
    <div className="home">
      <Hero />
      {dividedCoworkingSpaces && dividedCoworkingSpaces.map((chunk, index) => (
        <div className="dividedSection" key={index}>
          <CardWrapper coworkingSpaces={chunk}/>
          {index < dividedCoworkingSpaces.length -1 && (index % 2 === 0 ? (
            <TuktukDivider />
          ) : (
            <CoffeeDivider />
          )
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;
