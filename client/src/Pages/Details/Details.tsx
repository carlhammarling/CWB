import React from "react";
import "./Details.scss";
import { useDataContext } from "../../Context/DataContext";
import { useParams } from "react-router-dom";
import DetailsImageContainer from "../../Components/Organisms/DetailsImageContainer/DetailsImageContainer";
import DetailsContent from "../../Components/Organisms/DetailsContent/DetailsContent";
import Pricing from "../../Components/Molecules/Pricing/Pricing";
import Reviews from "../../Components/Molecules/Reviews/Reviews";
import Button from "../../Components/Molecules/Button/Button";

const Details = () => {
  const { coworkingSpaces } = useDataContext();
  const { id } = useParams();

  const thisCoworkingSpace = coworkingSpaces?.find((space) => space._id === id);

  return (
    <div className="detailsWrapper">
      <div className="details">
        {thisCoworkingSpace && (
          <>
            <DetailsImageContainer {...thisCoworkingSpace} />
            <DetailsContent {...thisCoworkingSpace} />
            <Pricing {...thisCoworkingSpace.price} />
            {thisCoworkingSpace.reviews ? (
              <Reviews reviews={thisCoworkingSpace.reviews} />
            ) : (
              <></>
            )}
          </>
        )}
      </div>
        <Button text="Book now!"/>
    </div>
  );
};

export default Details;
