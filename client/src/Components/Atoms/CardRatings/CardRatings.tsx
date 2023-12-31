import React from "react";
import "./CardRatings.scss";
import { sumAverageRating } from "../../../utils/SumAverageRating";

const CardRatings = (props: ReviewProps) => {
  const averageRating = sumAverageRating(props.reviews);

  return (
    <div className="cardRating">
      <div>
        <i className="fa-solid fa-star"></i>
      </div>
      <p>{averageRating}</p>
    </div>
  );
};

export default CardRatings;
