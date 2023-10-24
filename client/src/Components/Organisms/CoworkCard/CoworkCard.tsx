import React from "react";
import "./CoworkCard.scss";
import CardRatings from "../../Atoms/CardRatings/CardRatings";
import CardContent from "../../Molecules/CardContent/CardContent";
import { Link } from "react-router-dom";

const CoworkCard = (props: CoworkingSpace) => {
  return (
    
    <Link to={"/cowork/" + props._id}
      className="coworkCard"
      style={{ backgroundImage: `url(${props.images[0]})` }}
    >
      {props.reviews && <CardRatings reviews={props.reviews} />}
      <CardContent
        {...props}
      />
    </Link>
  );
};

export default CoworkCard;
