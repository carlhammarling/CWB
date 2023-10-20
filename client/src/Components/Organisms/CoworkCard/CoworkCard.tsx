import React from "react";
import "./CoworkCard.scss";
import CardRatings from "../../Molecules/CardRatings/CardRatings";
import CardContent from "../../Molecules/CardContent/CardContent";

const CoworkCard = (props: CoworkingSpace) => {
  return (
    <div
      className="coworkCard"
      style={{ backgroundImage: `url(${props.images[0]})` }}
    >
      {props.reviews && <CardRatings reviews={props.reviews} />}
      <CardContent
        {...props}
      />
    </div>
  );
};

export default CoworkCard;
