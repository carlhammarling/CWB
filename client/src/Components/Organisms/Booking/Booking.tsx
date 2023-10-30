import React, { useEffect, useState } from "react";
import { useDataContext } from "../../../Context/DataContext";
import { useParams } from "react-router-dom";
import "./Booking.scss";
import PaymentMethod from "../../Molecules/PaymentMethod/PaymentMethod";
import Calendar_ from "../Calendar_/Calendar_";
import FacilityTextAtomRow from "../../Molecules/FacilityTextAtomRow/FacilityTextAtomRow";

const Booking = () => {
  const { userData, coworkingSpaces } = useDataContext();
  const { id } = useParams();

  const [error, setError] = useState<string | null>(null)
  const thisCoworkingSpace = coworkingSpaces?.find((space) => space._id === id);
  const [bookingData, setBookingData] = useState<BookingData>();
  const [selectedPM, setSelectedPM] =
    useState<PaymentMethod>("visa-mastercard");
  const [arriveDate, setArriveDate] = useState<CalenderValue>(null);
  const [checkoutDate, setCheckoutDate] = useState<CalenderValue>(null);

  const submitBooking = () => {
    if (thisCoworkingSpace && userData && arriveDate && checkoutDate) {
      setError(null)
      setBookingData({
        coworkingId: thisCoworkingSpace._id,
        userId: userData._id,
        paymentMethod: selectedPM,
        checkIn: arriveDate,
        checkOut: checkoutDate
      });
    } else {
      setError("You have to fill in all the fields")
    }
  }

  useEffect(() => {
    console.log(bookingData);
  }, [bookingData]);

  return (
    <div className="booking">
      <h1>Choose dates</h1>
      {thisCoworkingSpace && (
        <div className="bookingContent">
          <div
            className="coworkImg"
            style={{ backgroundImage: `url(${thisCoworkingSpace.images[0]})` }}
          ></div>
          <h2 className="darkGray">{thisCoworkingSpace.name}</h2>
          <FacilityTextAtomRow facilities={thisCoworkingSpace.facilities} />
          <Calendar_
            arriveDate={arriveDate}
            setArriveDate={setArriveDate}
            checkoutDate={checkoutDate}
            setCheckoutDate={setCheckoutDate}
          />
          {arriveDate && !checkoutDate && (
            <div className="totPrice">
              <p className="bold darkGray">Total price</p>
              <p className="bold darkGray">
                {thisCoworkingSpace.price.day} THB
              </p>
            </div>
          )}
          {arriveDate && checkoutDate && (
            <div className="totPrice">
              <p className="bold darkGray">Total price</p>
              <p className="bold darkGray">
                {thisCoworkingSpace.price.week} THB
              </p>
            </div>
          )}

          <PaymentMethod
            selectedPM={selectedPM}
            setSelectedPM={setSelectedPM}
          />
          {error && <p>{error}</p>}
          <button className="greenButton h2" onClick={submitBooking}>Book now!</button>
        </div>
      )}
    </div>
  );
};

export default Booking;
