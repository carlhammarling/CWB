import React, { useState } from "react";
import { useDataContext } from "../../../Context/DataContext";
import { useParams } from "react-router-dom";
import "./Booking.scss";
import PaymentMethod from "../../Molecules/PaymentMethod/PaymentMethod";
import Calendar_ from "../Calendar_/Calendar_";
import FacilityTextAtomRow from "../../Molecules/FacilityTextAtomRow/FacilityTextAtomRow";
import BookingPrice from "../../Molecules/BookingPrice/BookingPrice";
import AdressContact from "../../Molecules/AdressContact/AdressContact";
import useWindowSize from "../../../Utils/useWindowSize";
import BookingSuccess from "../../Atoms/BookingSucess/BookingSuccess";
import useBooking from "../../../Utils/useBooking";

const Booking = () => {
  const windowWidth = useWindowSize();

  const { setShowModal, bookingSuccess } = useDataContext();
  const { id } = useParams();
  const { thisCoworkingSpace, submitBooking, error } =
    useBooking(id);

  if (!thisCoworkingSpace) {
    setShowModal(false);
  }

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
            <button className="greenButton h2" onClick={submitBooking}>
              Book now!
            </button>
          </div>
        ) : (
          <BookingSuccess />
        )
      ) 
      
      

      
      : 
      


// Desktop
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
              <button className="greenButton h2" onClick={submitBooking}>
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
