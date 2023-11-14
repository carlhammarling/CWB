import React, { useEffect, useState } from "react";
import { useDataContext } from "../../../Context/DataContext";
import { useNavigate, useParams } from "react-router-dom";
import "./Booking.scss";
import PaymentMethod from "../../Molecules/PaymentMethod/PaymentMethod";
import Calendar_ from "../Calendar_/Calendar_";
import FacilityTextAtomRow from "../../Molecules/FacilityTextAtomRow/FacilityTextAtomRow";
import { useBookingContext } from "../../../Context/BookingContext";
import BookingPrice from "../../Molecules/BookingPrice/BookingPrice";
import axios from "axios";
import AdressContact from "../../Molecules/AdressContact/AdressContact";

const Booking = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();

  const { setShowModal, coworkingSpaces, token } = useDataContext();
  const { selectedPM, arriveDate, checkoutDate, price } = useBookingContext();

  const { id } = useParams();

  const [error, setError] = useState<string | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);
  const thisCoworkingSpace = coworkingSpaces?.find((space) => space._id === id);

  const submitBooking = async () => {
    if (!thisCoworkingSpace || !arriveDate || !checkoutDate || !price) {
      setError("You have to fill in all the fields");
      return;
    }
    const bookingData: BookingData = {
      coworkingId: thisCoworkingSpace._id,
      paymentMethod: selectedPM,
      arriveDate,
      checkoutDate,
      price,
    };

    try {
      console.log(bookingData);
      const res = await axios.post(BASE_URL + "/api/booking", bookingData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.data) {
        setError(null);
        setBookingSuccess(true);
        setTimeout(() => {
          navigate("/account");
          setShowModal(false);
          setBookingSuccess(false);
        }, 2000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (!thisCoworkingSpace) {
    setShowModal(false);
  }

  return (
    <div>
      {windowWidth <= 1000 ? (
        <div className="booking">
          {thisCoworkingSpace && !bookingSuccess && (
            <div className="bookingContent">
              <h1>Choose dates</h1>
              <img
                className="coworkImg"
                src={thisCoworkingSpace.images[0]}
                alt={thisCoworkingSpace.name}
              />
              <h2 className="darkGray">{thisCoworkingSpace.name}</h2>
              <AdressContact
                email={thisCoworkingSpace.email}
                adress={thisCoworkingSpace.adress}
              />
              <FacilityTextAtomRow facilities={thisCoworkingSpace.facilities} />
              <Calendar_ />
              <BookingPrice {...thisCoworkingSpace} />
              <PaymentMethod />
              {error && <p>{error}</p>}
              <button className="greenButton h2" onClick={submitBooking}>
                Book now!
              </button>
            </div>
          )}
          {thisCoworkingSpace && bookingSuccess && (
            <div className="bookingSuccess">
              <h1>
                Thank you <br />
                for your <br />
                <span className="yellow">booking!</span>
              </h1>
            </div>
          )}
        </div>
      ) : (
        <div className="booking">
          {thisCoworkingSpace && !bookingSuccess && (
            <div className="bookingContent">
              <div className="bookingCol">
                <h1 className="small">Choose dates</h1>
                <Calendar_ />
                <PaymentMethod />
              </div>
              <div className="bookingCol">
                <div className="colTop">
                  <img
                    className="coworkImg"
                    src={thisCoworkingSpace.images[0]}
                    alt={thisCoworkingSpace.name}
                  />
                  <h2 className="darkGray small">{thisCoworkingSpace.name}</h2>
                  <AdressContact
                    email={thisCoworkingSpace.email}
                    adress={thisCoworkingSpace.adress}
                  />
                  <FacilityTextAtomRow
                    facilities={thisCoworkingSpace.facilities}
                  />
                </div>
                <div className="colBottom">
                  <BookingPrice {...thisCoworkingSpace} />
                  {error && <p>{error}</p>}
                  <button className="greenButton h2" onClick={submitBooking}>
                    Book now!
                  </button>
                </div>
              </div>
            </div>
          )}
          {thisCoworkingSpace && bookingSuccess && (
            <div className="bookingSuccess">
              <h1>
                Thank you <br />
                for your <br />
                <span className="yellow">booking!</span>
              </h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Booking;
