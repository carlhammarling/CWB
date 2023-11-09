import React from "react";
import { DateConverter } from "../../../Utils/DateConverter";
import "./AccountCard.scss";

interface accountCardProps {
  booking: BookedData;
  edit: boolean;
}
const AccountCard = (props: accountCardProps) => {
  return (
    <div className={`accountCard ${!props.edit ? "oldBooking" : ""}`}>
      <img src={props.booking.coworkingId.images[0]} alt="" />
      <div className="cardInfo">
        <div className="cardTop">
          <h3>{props.booking.coworkingId.name}</h3>
          {props.edit ? (
            <button>
              <i className="fa-solid fa-pen"></i>
            </button>
          ) : (
            <></>
          )}
        </div>
        <div className="cardBottom">
          <p className="xs">
            {DateConverter(props.booking.arriveDate)} -{" "}
            {DateConverter(props.booking.checkoutDate)}
          </p>
          <p className="xs">{props.booking.price} THB</p>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
