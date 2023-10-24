import React from "react";
import "./CardContent.scss";
import ActivityAtomRow from "../FacilityAtomRow/FacilityAtomRow";
import CardPrice from "../../Atoms/CardPrice/CardPrice";

const CardContent = (coworkingSpace: CoworkingSpace) => {
  return (
    <div className="cardContent">
      <h2 className="radjhani">{coworkingSpace.name}</h2>
      <div className="cardLocation">
        <p className="radjhani">{coworkingSpace.adress.slice(0, 25)}</p>
      </div>
      <div className="cardBottom">
        <ActivityAtomRow facilities={coworkingSpace.facilities} />
        <CardPrice {...coworkingSpace.price} />
      </div>
    </div>
  );
};

export default CardContent;
