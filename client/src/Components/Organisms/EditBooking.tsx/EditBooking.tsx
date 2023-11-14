import React, { useState } from "react";
import { useDataContext } from "../../../Context/DataContext";
import { useParams } from "react-router-dom";
import "./EditBooking.scss";
import PaymentMethod from "../../Molecules/PaymentMethod/PaymentMethod";
import Calendar_ from "../Calendar_/Calendar_";
import FacilityTextAtomRow from "../../Molecules/FacilityTextAtomRow/FacilityTextAtomRow";
import BookingPrice from "../../Molecules/BookingPrice/BookingPrice";
import AdressContact from "../../Molecules/AdressContact/AdressContact";
import useWindowSize from "../../../Utils/useWindowSize";
import BookingSuccess from "../../Atoms/BookingSucess/BookingSuccess";
import useBooking from "../../../Utils/useBooking";
import useEditBooking from "../../../Utils/useEditBooking";
import { useBookingContext } from "../../../Context/BookingContext";

const EditBooking = () => {
  const windowWidth = useWindowSize();

  const { setShowModal, editId } = useDataContext();
  const { thisCoworkingSpace, submitBooking, error, bookingSuccess } =
    useEditBooking(editId);

  return (
    <div className="editBooking">
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
              Confirm changes
            </button>
            <button className="redButton h2" onClick={submitBooking}>
              Cancel booking
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
              <button className="greenButton h2" onClick={submitBooking}>
                Confirm changes
              </button>
              <button className="redButton h2" onClick={submitBooking}>
                Cancel booking
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

export default EditBooking;
