import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Modal.scss";
import { useDataContext } from "../../../Context/DataContext";
import LoginRegister from "../LoginRegister/LoginRegister";
import Booking from "../Booking/Booking";
import { BookingProvider } from "../../../Context/BookingContext";
import EditBooking from "../EditBooking.tsx/EditBooking";

const Modal = () => {
  const { setShowModal, userData, edit } = useDataContext();

  return (
    <div
      className="modalWrapper"
      onClick={() => setShowModal((state) => !state)}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <button
            className="invisibleButton"
            onClick={() => setShowModal((state) => !state)}
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
