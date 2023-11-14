import React, { useEffect, useState } from "react";
import { DateConverter } from "../../../Utils/DateConverter";
import "./AccountCard.scss";
import { useDataContext } from "../../../Context/DataContext";
import useWindowSize from "../../../Utils/useWindowSize";
import useEditBooking from "../../../Utils/useEditBooking";
import { useBookingContext } from "../../../Context/BookingContext";

const AccountCard = (props: accountCardProps) => {
  const { setShowModal, setEdit, setEditId } = useDataContext();
  const windowWidth = useWindowSize();


  return (
    <div className={`accountCard ${!props.edit ? "oldBooking" : ""}`}>
      <img src={props.booking.coworkingId.images[0]} alt="" />
      <div className="cardInfo">
        <div className="cardTop">
          <h3>{props.booking.coworkingId.name}</h3>
          {props.edit ? (
            <button onClick={() => {setShowModal(true); setEdit(true); setEditId(props.booking.coworkingId._id);
            }}>
              <i className="fa-solid fa-pen"></i>
            </button>
          ) : (
            <></>
          )}
        </div>
        {windowWidth <= 1000 ? (
          <div className="cardBottom">
            <p className="xs">
              {DateConverter(props.booking.arriveDate)} -{" "}
              {DateConverter(props.booking.checkoutDate)}
            </p>
            <p className="xs">{props.booking.price} THB</p>
          </div>
        ) : (
          <div>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              dolor, soluta consectetur repellat praesentium odio eaque porro,
              nihil accusamus libero aspernatur.
            </p>
            <div className="cardBottom">
              <p className="bold">
                {DateConverter(props.booking.arriveDate)} -{" "}
                {DateConverter(props.booking.checkoutDate)}
              </p>
              <p className="bold">{props.booking.price} THB</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountCard;
