import React, { useEffect, useState } from "react";
import { useBookingContext } from "../../../Context/BookingContext";
import "./BookingPrice.scss";

const BookingPrice = (thisCoworkingSpace: CoworkingSpace) => {
  const { arriveDate, checkoutDate, price, setPrice } = useBookingContext();

  const totalDaysCalc = (arriveDate: any, checkoutDate: any) => {
    const time = Math.abs(arriveDate - checkoutDate);
    const days = Math.ceil(time / (1000 * 60 * 60 * 24));
    return days;
  };

  const days: number = totalDaysCalc(arriveDate, checkoutDate) + 1;

  useEffect(() => {
    if (checkoutDate !== null)
      if (days <= 7) {
        setPrice(thisCoworkingSpace.price.day * days);
        return
      }
      if(days <= 31) {
        const weeks = Math.floor( days / 7);
        const remainingDays = (days % 7);
        const weekPrice = thisCoworkingSpace.price.week * weeks;
        const dayPrice = thisCoworkingSpace.price.day * remainingDays;
        setPrice(weekPrice + dayPrice);
        return
      }
      else {
        setPrice(null)
      }
  }, [checkoutDate]);

  return (
    <div className="bookingPrice">
      {/* {arriveDate && checkoutDate && ( */}
        <div className="totPrice">
          <p className="darkGray">Total price</p>
          {price && 
          <p className="darkGray">{price} THB</p>
          }
          {!price && 
          <p className="darkGray"></p>
          }
        </div>
      {/* )} */}
    </div>
  );
};

export default BookingPrice;
