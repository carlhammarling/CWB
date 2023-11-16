import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Modal.scss";
import { useDataContext } from "../../../contexts/DataContext";
import LoginRegister from "../LoginRegister/LoginRegister";
import Booking from "../Booking/Booking";
import { BookingProvider } from "../../../contexts/BookingContext";
import EditBooking from "../EditBooking.tsx/EditBooking";

const Modal = () => {
  const { setShowModal, userData, edit, bookingSuccess } = useDataContext();

  const [fade, setFade] = useState('fadeIn');

  const fadeClose = () => {
    setFade('fadeOut');
    const timer = setTimeout(() => {setShowModal((state) => !state); setFade('fadeIn')}, 300);
    return () => clearTimeout(timer)
  }

  useEffect(() => {
    if(bookingSuccess === true) {
      const timer = setTimeout(() => setFade('fadeOut'), 1705)
      return () => clearTimeout(timer);
    }
  }, [bookingSuccess]);
   

  return (
    <div
      className={`modalWrapper ${fade}`}
      onClick={() => setShowModal((state) => !state)}
    >
      <div className={`modal ${fade}`} onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <button
            className="invisibleButton"
            onClick={fadeClose}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="modalContent">
          <BookingProvider>
            {edit ? (
              userData ? (
                <EditBooking />
              ) : (
                <LoginRegister />
              )
            ) : userData ? (
              <Booking />
            ) : (
              <LoginRegister />
            )}
          </BookingProvider>
        </div>
      </div>
    </div>
  );
};

export default Modal;
