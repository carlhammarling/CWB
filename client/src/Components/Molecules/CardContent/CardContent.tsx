import React from "react";
import "./CardContent.scss";
import ActivityAtomRow from "../ActivityAtomRow/ActivityAtomRow";
import CardPrice from "../CardPrice/CardPrice";

const CardContent = (props: CardContentProps) => {
  return (
    <div className="cardContent">
      <h2 className="radjhani">{props.name}</h2>
      <div className="cardLocation">
        <p className="radjhani">{props.adress}</p>
      </div>
      <div className="cardBottom">
        <ActivityAtomRow />
        <CardPrice price={props.price}/>
      </div>
    </div>
  );
};

export default CardContent;
