import React, { useEffect, useState } from "react";
import { useDataContext } from "../../../contexts/DataContext";
import "./EditBooking.scss";
import PaymentMethod from "../../molecules/PaymentMethod/PaymentMethod";
import Calendar_ from "../Calendar_/Calendar_";
import FacilityTextAtomRow from "../../molecules/FacilityTextAtomRow/FacilityTextAtomRow";
import BookingPrice from "../../molecules/BookingPrice/BookingPrice";
import AdressContact from "../../molecules/AdressContact/AdressContact";
import useWindowSize from "../../../utils/useWindowSize";
import BookingSuccess from "../../atoms/BookingSucess/BookingSuccess";
import useEditBooking from "../../../utils/useEditBooking";

const EditBooking = () => {
  const windowWidth = useWindowSize();
  const [confirmCancel, setConfirmCancel] = useState(false);
  const [successMsg, setSuccessMsg] = useState<SuccessMsg>("edit")

  const { editBooking, bookingSuccess } = useDataContext();
  const { updateBooking, deleteBooking, error } = useEditBooking(editBooking);

  return (
    <div className="editBooking">
      {windowWidth <= 1000 ? (
        //Mobile
        editBooking && !bookingSuccess ? (
          <div className="editBookingContent">
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
            <FacilityTextAtomRow
              facilities={editBooking.coworkingId.facilities}
            />
            <Calendar_ editBooking={editBooking} />
            <BookingPrice {...editBooking.coworkingId} />
            <PaymentMethod />
            {error && <p className="errorMsg">{error}</p>}
            <button className="greenButton h2" onClick={() => {updateBooking(); setSuccessMsg("edit")}}>
              Confirm changes
            </button>
            {confirmCancel ? (
              <button
                className="bigButton redButton h2"
                onClick={() => {
                  deleteBooking();
                  setSuccessMsg("delete");
                  setTimeout(() => setConfirmCancel(false), 1000);
                }}
              >
                Confirm cancel
              </button>
            ) : (
              <button
                className="bigButton redButton h2"
                onClick={() => setConfirmCancel(true)}
              >
                Cancel booking
              </button>
            )}
          </div>
        ) : (
          <BookingSuccess type={successMsg}/>
        )
      ) : // Desktop
      editBooking && !bookingSuccess ? (
        <div className="editBookingContent">
          <div className="bookingCol">
            <h1 className="small">Edit dates</h1>
            <Calendar_ editBooking={editBooking} />
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
              <FacilityTextAtomRow
                facilities={editBooking.coworkingId.facilities}
              />
            </div>
            <div className="colBottom">
              <BookingPrice {...editBooking.coworkingId} />
              {error && <p className="errorMsg">{error}</p>}
              <button className="greenButton h2" onClick={() => {updateBooking(); setSuccessMsg("edit")}}>
                Confirm changes
              </button>
              {confirmCancel ? (
                <button
                  className="redButton h2"
                  onClick={() => {
                    deleteBooking();
                    setSuccessMsg("delete");
                    setTimeout(() => setConfirmCancel(false), 1000);
                  }}
                >
                  Confirm cancel
                </button>
              ) : (
                <button
                  className="redButton h2"
                  onClick={() => setConfirmCancel(true)}
                >
                  Cancel booking
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <BookingSuccess type={successMsg}/>
      )}
    </div>
  );
};

export default EditBooking;
