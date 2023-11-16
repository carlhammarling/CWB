import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../contexts/DataContext";
import { useBookingContext } from "../contexts/BookingContext";

const useBooking = (id: string | undefined) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const { setShowModal, coworkingSpaces, token, setBookingSuccess } =
    useDataContext();
  const { selectedPM, arriveDate, checkoutDate, price } = useBookingContext();
  const navigate = useNavigate();

  const [error, setError] = useState<string | null>(null);
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
        }, 500);
        setTimeout(() => {
          setShowModal(false);
          setBookingSuccess(false);
        }, 2000);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return { thisCoworkingSpace, submitBooking, error };
};

export default useBooking;
