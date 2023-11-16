import React, { useEffect, useState } from "react";
import "./Details.scss";
import { useDataContext } from "../../contexts/DataContext";
import { useParams } from "react-router-dom";
import DetailsImageContainer from "../../components/organisms/DetailsImageContainer/DetailsImageContainer";
import DetailsContent from "../../components/organisms/DetailsContent/DetailsContent";
import Pricing from "../../components/molecules/Pricing/Pricing";
import Reviews from "../../components/molecules/Reviews/Reviews";
import Map from "../../components/molecules/Map/Map";
import useWindowSize from "../../utils/useWindowSize";

const Details = () => {
  const { coworkingSpaces, setShowModal, setEdit, bookingSuccess } = useDataContext();
  const { id } = useParams();
  const windowWidth = useWindowSize();

  const thisCoworkingSpace = coworkingSpaces?.find((space) => space._id === id);

  const [fade, setFade] = useState('')

  useEffect(() => {
    if(bookingSuccess === true) {
      const timer = setTimeout(() => setFade('fadeOut'), 100)
      return () => clearTimeout(timer);
    }
  }, [bookingSuccess]);

  return (
    <div className={`detailsWrapper ${fade}`}>
      {thisCoworkingSpace && (
        <div>
          {windowWidth <= 1000 ? (
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
                <button
                  className="bigButton greenButton h2"
                  onClick={() => {
                    setShowModal((state) => !state);
                    setEdit(false);
                  }}
                >
                  Book Now!
                </button>
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
                  <button
                    className="bigButton greenButton h2"
                    onClick={() => {
                      setShowModal((state) => !state);
                      setEdit(false);
                    }}
                  >
                    Book Now!
                  </button>

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
