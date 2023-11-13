import React, { useEffect, useState } from "react";
import { DateConverter } from "../../../Utils/DateConverter";
import "./AccountCard.scss";

const AccountCard = (props: accountCardProps) => {
  const [windoWidth, setWindoWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindoWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        {windoWidth <= 1000 ? (
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
