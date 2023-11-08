import React, { useEffect, useState } from "react";
import "./BookingsList.scss";
import { useDataContext } from "../../../Context/DataContext";
import axios from "axios";

const BookingsList = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const { token } = useDataContext();
  const [userBookings, setUserBookings] = useState<BookedData[]>([]);

  useEffect(() => {
    const getBookings = async () => {
      if (!token) {
        return;
      }
      try {
        const res = await axios.get(BASE_URL + "/api/booking/userbooking", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const userBookings: BookedData[] = res.data;
        setUserBookings(userBookings);
      } catch (err) {
        console.log(err);
      }
    };
    getBookings();
  }, [token]);

  useEffect(() => {
    console.log(userBookings);
  }, [userBookings]);

  return (
    <div className="bookingsListWrapper">
      <div className="bookingsListHeader">
        <h2>Bookings</h2>
      </div>
      <div className="bookingsList">
        {userBookings && 
          userBookings.map((booking, index) => (
            <div className="bookingCard" key={index}>
                <img src={booking.coworkingId.images[0]} alt="" />
                <div className="cardInfo">
                    <div className="cardTop">
                        <h3>{booking.coworkingId.name}</h3>
                    </div>
                    <div className="cardBottom">
                        <p className="xs">{booking.arriveDate.toString()}</p>
                        <p className="xs">{booking.price}</p>
                    </div>
                </div>
            </div>
          ))}
      </div>
      <div className="bookingsListHeader">
        <h2>Old bookings</h2>
      </div>
    </div>
  );
};

export default BookingsList;
