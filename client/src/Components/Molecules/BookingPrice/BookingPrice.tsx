import React, { useEffect, useState } from "react";
import { useBookingContext } from "../../../contexts/BookingContext";
import "./BookingPrice.scss";

const BookingPrice = (thisCoworkingSpace: CoworkingSpace) => {
  const { arriveDate, checkoutDate, price, setPrice } = useBookingContext();

  //Try to find out what the arrivedate is and take away the weekends.
  const totalDaysCalc = (arriveDate: any, checkoutDate: any) => {
    const time = Math.abs(arriveDate - checkoutDate);
    const days = Math.ceil(time / (1000 * 60 * 60 * 24));
    return days;
  };

  const days: number = totalDaysCalc(arriveDate, checkoutDate) + 1;

  useEffect(() => {
    if (checkoutDate !== null) {
      if (days < 7) {
        setPrice(thisCoworkingSpace.price.day * days);
        return;
      } else if (days < 28) {
        const weeks = Math.floor(days / 7);
        const remainingDays = days % 7;
        const weekPrice = thisCoworkingSpace.price.week * weeks;
        const dayPrice = thisCoworkingSpace.price.day * remainingDays;
        setPrice(weekPrice + dayPrice);
        return;
      } else if (days >= 28) {
        const month = Math.floor(days / 28);
        const remainingWeeks = Math.floor((days % 28) / 7);
        const remainingDays = (days % 28) % 7;
        const monthPrice = thisCoworkingSpace.price.month * month;
        const weekPrice = thisCoworkingSpace.price.week * remainingWeeks;
        const dayPrice = thisCoworkingSpace.price.day * remainingDays;
        setPrice(monthPrice + weekPrice + dayPrice);
        return;
      }
    } else {
      setPrice(null);
      return;
    }
  }, [checkoutDate]);

  return (
    <div className="bookingPrice">
      <div className="totPrice">
        <p className="darkGray">Total price</p>
        {price && <p className="darkGray">{price} THB</p>}
        {!price && <p className="darkGray"></p>}
      </div>
    </div>
  );
};

export default BookingPrice;
