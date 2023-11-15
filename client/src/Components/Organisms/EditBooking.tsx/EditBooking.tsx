import React, { useEffect, useState } from "react";
import { useDataContext } from "../../../Context/DataContext";
import "./EditBooking.scss";
import PaymentMethod from "../../Molecules/PaymentMethod/PaymentMethod";
import Calendar_ from "../Calendar_/Calendar_";
import FacilityTextAtomRow from "../../Molecules/FacilityTextAtomRow/FacilityTextAtomRow";
import BookingPrice from "../../Molecules/BookingPrice/BookingPrice";
import AdressContact from "../../Molecules/AdressContact/AdressContact";
import useWindowSize from "../../../Utils/useWindowSize";
import BookingSuccess from "../../Atoms/BookingSucess/BookingSuccess";
import useEditBooking from "../../../Utils/useEditBooking";

const EditBooking = () => {
  const windowWidth = useWindowSize();

  const { editBooking, bookingSuccess  } = useDataContext();
  const { updateBooking, deleteBooking, error } =
    useEditBooking(editBooking);
    
  return (
    <div className="editBooking">
      {windowWidth <= 1000 ? (
        //Mobile
        editBooking && !bookingSuccess ? (
          <div className="bookingContent">
            <h1>Edit dates</h1>
            <img
              className="coworkImg"
              src={editBooking.coworkingId.images[0]}
              alt={editBooking.coworkingId.name}
            />
            <h2 className="darkGray">{editBooking.coworkingId.name}</h2>
            <AdressContact
              email={editBooking.coworkingId.email}
              adress={editBooking.coworkingId.adress}
            />
            <FacilityTextAtomRow facilities={editBooking.coworkingId.facilities} />
            <Calendar_ editBooking={editBooking} />
            <BookingPrice {...editBooking.coworkingId} />
            <PaymentMethod />
            {error && <p>{error}</p>}
            <button className="greenButton h2" onClick={updateBooking}>
              Confirm changes
            </button>
            <button className="redButton h2" onClick={deleteBooking}>
              Cancel booking
            </button>
          </div>
        ) : (
          <BookingSuccess />
        )
      ) : // Desktop
      editBooking && !bookingSuccess ? (
        <div className="bookingContent">
          <div className="bookingCol">
            <h1 className="small">Edit dates</h1>
            <Calendar_ />
            <PaymentMethod />
          </div>
          <div className="bookingCol">
            <div className="colTop">
              <img
                className="coworkImg"
                src={editBooking.coworkingId.images[0]}
                alt={editBooking.coworkingId.name}
              />
              <h2 className="darkGray small">{editBooking.coworkingId.name}</h2>
              <AdressContact
                email={editBooking.coworkingId.email}
                adress={editBooking.coworkingId.adress}
              />
              <FacilityTextAtomRow facilities={editBooking.coworkingId.facilities} />
            </div>
            <div className="colBottom">
              <BookingPrice {...editBooking.coworkingId} />
              {error && <p>{error}</p>}
              <button className="greenButton h2" onClick={updateBooking}>
                Confirm changes
              </button>
              <button className="redButton h2" onClick={deleteBooking}>
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
