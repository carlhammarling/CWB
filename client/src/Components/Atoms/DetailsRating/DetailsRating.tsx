import React, { useEffect, useState } from "react";
import "./DetailsRating.scss";

const DetailsRating = (props: { rating: number }) => {
  const [stars, setStars] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const filledStars = [];
    const hollowStars = [];

    for (let i = 0; i < props.rating; i++)
      filledStars.push(
        <i key={`filled-${i}`} className="fa-solid fa-star fa-sm yellow"></i>
      );

    for (let i = 0; i < 5 - props.rating; i++)
      hollowStars.push(
        <i key={`hollow-${i}`} className="fa-solid fa-star fa-sm lightGray"></i>
      );

    setStars([...filledStars, ...hollowStars]);
  }, [props.rating]);

  return (
    <div className="detailsRating">
      <p>{stars}</p>
    </div>
  );
};

export default DetailsRating;
