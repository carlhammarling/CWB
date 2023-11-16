import React, { useEffect } from "react";
import { useDataContext } from "../../../contexts/DataContext";
import { useParams } from "react-router-dom";
import "./Booking.scss";
import PaymentMethod from "../../molecules/PaymentMethod/PaymentMethod";
import Calendar_ from "../Calendar_/Calendar_";
import FacilityTextAtomRow from "../../molecules/FacilityTextAtomRow/FacilityTextAtomRow";
import BookingPrice from "../../molecules/BookingPrice/BookingPrice";
import AdressContact from "../../molecules/AdressContact/AdressContact";
import useWindowSize from "../../../utils/useWindowSize";
import BookingSuccess from "../../atoms/BookingSucess/BookingSuccess";
import useBooking from "../../../utils/useBooking";

const Booking = () => {
  const windowWidth = useWindowSize();

  const { setShowModal, bookingSuccess } = useDataContext();
  const { id } = useParams();
  const { thisCoworkingSpace, submitBooking, error } = useBooking(id);

  useEffect(() => {
    if (!thisCoworkingSpace) {
      setShowModal(false);
    }
  }, []);

  return (
    <div className="booking">
      {windowWidth <= 1000 ? (
        //Mobile
        thisCoworkingSpace && !bookingSuccess ? (
          <div className="bookingContent">
            <h1>Choose dates</h1>
            <img
              className="coworkImg"
              src={thisCoworkingSpace.images[0]}
              alt={thisCoworkingSpace.name}
            />
            <h2 className="darkGray">{thisCoworkingSpace.name}</h2>
            <AdressContact
              email={thisCoworkingSpace.email}
              adress={thisCoworkingSpace.adress}
            />
            <FacilityTextAtomRow facilities={thisCoworkingSpace.facilities} />
            <Calendar_ />
            <BookingPrice {...thisCoworkingSpace} />
            <PaymentMethod />
            {error && <p>{error}</p>}
            <button
              className="bigButton greenButton h2"
              onClick={submitBooking}
            >
              Book now!
            </button>
          </div>
        ) : (
          <BookingSuccess />
        )
      ) : // Desktop
      thisCoworkingSpace && !bookingSuccess ? (
        <div className="bookingContent">
          <div className="bookingCol">
            <h1 className="small">Choose dates</h1>
            <Calendar_ />
            <PaymentMethod />
          </div>
          <div className="bookingCol">
            <div className="colTop">
              <img
                className="coworkImg"
                src={thisCoworkingSpace.images[0]}
                alt={thisCoworkingSpace.name}
              />
              <h2 className="darkGray small">{thisCoworkingSpace.name}</h2>
              <AdressContact
                email={thisCoworkingSpace.email}
                adress={thisCoworkingSpace.adress}
              />
              <FacilityTextAtomRow facilities={thisCoworkingSpace.facilities} />
            </div>
            <div className="colBottom">
              <BookingPrice {...thisCoworkingSpace} />
              {error && <p>{error}</p>}
              <button
                className="bigButton greenButton h2"
                onClick={submitBooking}
              >
                Book now!
              </button>
            </div>
          </div>
        </div>
      ) : (
        <BookingSuccess />
      )}
    </div>
  );
};

export default Booking;
