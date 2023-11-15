import React, { useEffect, useState } from "react";
import "./AccountList.scss";
import { useDataContext } from "../../../Context/DataContext";
import axios from "axios";
import AccountCard from "../../Organisms/AccountCard/AccountCard";
import { ClipLoader } from "react-spinners";
import useEditBooking from "../../../Utils/useEditBooking";

const AccountList = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const { token, bookingSuccess  } = useDataContext();
  const [userBookings, setUserBookings] = useState<BookedData[]>([]);
  const [upComingBookings, setUpComingBookings] = useState<BookedData[]>([]);
  const [oldBookings, setOldBookings] = useState<BookedData[]>([]);

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
    if(bookingSuccess || token) {
      getBookings();
    }
  }, [token, bookingSuccess] );

  useEffect(() => {
    const now = new Date();

    const newB: BookedData[] = [];
    const oldB: BookedData[] = [];

    userBookings.map((booking) => {
      //Change to checkout eventually
      const bookingDate = new Date(booking.arriveDate);
      if (bookingDate > now) {
        newB.push(booking);
      } else {
        oldB.push(booking);
      }
    });

    setUpComingBookings(newB);
    setOldBookings(oldB);
  }, [userBookings]);

  if (upComingBookings.length < 1) {
    return <div></div>;
  }

  return (
    <div className="accountListWrapper">
      <div className="accountListHeader">
        <h2>Bookings</h2>
      </div>
      <div className="accountList">
        {upComingBookings &&
          upComingBookings.map((booking, index) => (
            <AccountCard key={index} booking={booking} edit={true} />
          ))}
      </div>
      <div className="accountListHeader">
        <h2>Old bookings</h2>
      </div>
      <div className="accountList">
        {oldBookings &&
          oldBookings.map((booking, index) => (
            <AccountCard key={index} booking={booking} edit={false} />
          ))}
      </div>
    </div>
  );
};

export default AccountList;
