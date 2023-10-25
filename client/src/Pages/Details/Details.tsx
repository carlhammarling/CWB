import React, { useEffect, useState } from "react";
import "./Details.scss";
import { useDataContext } from "../../Context/DataContext";
import { useParams } from "react-router-dom";
import DetailsImageContainer from "../../Components/Organisms/DetailsImageContainer/DetailsImageContainer";
import DetailsContent from "../../Components/Organisms/DetailsContent/DetailsContent";
import Pricing from "../../Components/Molecules/Pricing/Pricing";
import Reviews from "../../Components/Molecules/Reviews/Reviews";
import Button from "../../Components/Atoms/Button/Button";
import Map from "../../Components/Molecules/Map/Map";

const Details = () => {
  const { coworkingSpaces } = useDataContext();
  const { id } = useParams();

  const thisCoworkingSpace = coworkingSpaces?.find((space) => space._id === id);

  const [windowwWidth, setWindowwWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowwWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="detailsWrapper">
      {thisCoworkingSpace && (
        <div>
          {windowwWidth <= 1000 ? (
            <div className="details">
              <DetailsImageContainer {...thisCoworkingSpace} />
              <DetailsContent {...thisCoworkingSpace} />
              <Pricing {...thisCoworkingSpace.price} />
              {thisCoworkingSpace.reviews ? (
                <Reviews reviews={thisCoworkingSpace.reviews} />
              ) : (
                <></>
              )}
              <Map coordinates={thisCoworkingSpace.coordinates} />
              <div className="buttonWrapper">
                <Button text="Book now!" />
              </div>
            </div>
          ) : (
            <div className="details">
              <DetailsImageContainer {...thisCoworkingSpace} />
              <div className="detailsDesktopContent">
                <div className="detailsDesktopLeft">
                  <DetailsContent {...thisCoworkingSpace} />
                  <Map coordinates={thisCoworkingSpace.coordinates} />
                </div>
                <div className="detailsDesktopRight">
                  <Pricing {...thisCoworkingSpace.price} />
                  <Button text="Book now!" />

                  {thisCoworkingSpace.reviews ? (
                    <Reviews reviews={thisCoworkingSpace.reviews} />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Details;
