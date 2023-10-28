import React, { useEffect, useState } from "react";
import { useDataContext } from "../../../Context/DataContext";
import { useParams } from "react-router-dom";
import "./Booking.scss";

const Booking = () => {
  const { userData, coworkingSpaces } = useDataContext();

  const { id } = useParams();

  type PaymentMethod = "paypal" | "visa-mastercard";

  interface BookingData {
    coworkingId: string;
    userId: string;
    paymentMethod: PaymentMethod;
  }

  const thisCoworkingSpace = coworkingSpaces?.find((space) => space._id === id);
  const loggedInUser: User = userData;

  const [bookingData, setBookingData] = useState<BookingData>({
    coworkingId: "",
    userId: "",
    paymentMethod: "visa-mastercard",
  });

  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethod>("visa-mastercard");
  useEffect(() => {
    if (thisCoworkingSpace) {
      setBookingData({
        coworkingId: thisCoworkingSpace._id,
        userId: loggedInUser._id,
        paymentMethod: selectedPaymentMethod,
      });
    }
  }, [selectedPaymentMethod]);

  useEffect(() => {
    console.log(bookingData);
  }, [bookingData]);

  return (
    <div className="booking">
      <h1>Choose dates</h1>
      {/* Add user who is logged in so that you can see who you are booking for? */}
      {/* <p>{userData.userName}</p> */}
      {thisCoworkingSpace && (
        <div className="bookingContent">
          <div
            className="coworkImg"
            style={{ backgroundImage: `url(${thisCoworkingSpace.images[0]})` }}
          ></div>
          <h2 className="darkGray">{thisCoworkingSpace.name}</h2>
          <div className="totPrice">
            <p>Total price</p>
            <p>{thisCoworkingSpace.price.month} THB</p>
          </div>
          <h2 className="darkGray">
            Choose payment method{" "}
            <i className="fa-solid fa-credit-card fa-sm"></i>
          </h2>
          <div className="paymentMethod">
            <img
              className={`paymentImg ${
                selectedPaymentMethod === "visa-mastercard" ? "active" : ""
              }`}
              onClick={() => setSelectedPaymentMethod("visa-mastercard")}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ539ufQZ_n9NoIO9CHegZ1c_mSEV3xKGqnOmvwXhAeb6Xy-3Vk2zMOO8veNOJjftC9Qw&usqp=CAU"
              alt=""
            />
            <div className="line"></div>
            <img
              className={`paymentImg ${
                selectedPaymentMethod === "paypal" ? "active" : ""
              }`}
              onClick={() => setSelectedPaymentMethod("paypal")}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJdjso_lcyN_0SmKZH4T0LwvUKVms39KghA&usqp=CAU"
              alt=""
            />
          </div>

          <button className="greenButton h2">Book now!</button>
        </div>
      )}
    </div>
  );
};

export default Booking;
