import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../contexts/DataContext";
import { useBookingContext } from "../contexts/BookingContext";

const useEditBooking = (editBooking: BookedData | undefined) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const { setShowModal, token, setBookingSuccess } = useDataContext();
  const { selectedPM, arriveDate, checkoutDate, price } = useBookingContext();
  const navigate = useNavigate();

  const [error, setError] = useState<string | null>(null);

  const updateBooking = async () => {
    if (!editBooking || !arriveDate || !checkoutDate || !price) {
      setError("You have to fill in all the fields");
      return;
    }
    const bookingData: BookingData = {
      bookingId: editBooking._id,
      coworkingId: editBooking.coworkingId._id,
      paymentMethod: selectedPM,
      arriveDate,
      checkoutDate,
      price,
    };

    try {
      console.log(bookingData);
      const res = await axios.put(BASE_URL + "/api/booking", bookingData, {
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

  const deleteBooking = async () => {
    if (!editBooking) {
      setError("can not find booking");
      return;
    }

    try {
      const res = await axios.delete(
        BASE_URL + "/api/booking/" + editBooking._id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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
  return { updateBooking, deleteBooking, error };
};

export default useEditBooking;
