import React from "react";
import "./Reviews.scss";
import DetailsRating from "../DetailsRating/DetailsRating";

const Reviews = (props: ReviewProps) => {
  return (
    <div className="reviews">
      <div className="header">
        <h2>Reviews </h2>
        <div className="h2">
          <i className="fa-solid fa-comment fa-sm"></i>
        </div>
      </div>
      {props.reviews.map((review) => (
        <div className="oneReview" key={review._id}>
          <DetailsRating rating={review.rating}/>
          <p className="lightGray italic">"{review.message}"</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
