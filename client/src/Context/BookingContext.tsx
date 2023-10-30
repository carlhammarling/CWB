import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const BookingContext = createContext<BookingContextProps | undefined>(undefined);

export const BookingProvider = ({ children }: BookingProviderProps) => {

  const [selectedPM, setSelectedPM] =
  useState<PaymentMethod>("visa-mastercard");

  const [arriveDate, setArriveDate] = useState<CalenderValue>(null);
  const [checkoutDate, setCheckoutDate] = useState<CalenderValue>(null);

  return (
    <BookingContext.Provider
      value={{
        selectedPM,
        setSelectedPM,
        arriveDate,
        setArriveDate,
        checkoutDate,
        setCheckoutDate
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

//A function that let us bring out the values from the context Type-safe.
export const useBookingContext = () => {
  const bookingContext = React.useContext(BookingContext);
  if (bookingContext === undefined) {
    throw new Error("Context must be inside a provider");
  }
  return bookingContext;
};
