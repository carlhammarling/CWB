import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import './Calendar_.scss'
import { useBookingContext } from "../../../Context/BookingContext";


const Calendar_ = () => {
  
  const { arriveDate, setArriveDate, checkoutDate, setCheckoutDate } = useBookingContext()

  const [value, setValue] = useState<CalenderValue>(new Date());

  const handleDateChange = (selectedDate: any) => {
    setValue(selectedDate);
    if (!arriveDate) {
      setArriveDate(selectedDate);
    } 
    if(arriveDate && !checkoutDate) {
      setCheckoutDate(selectedDate);
    }
    else {
      setArriveDate(selectedDate)
      setCheckoutDate(null)
    }
  };

  useEffect(() => {
    console.log("arrive:", arriveDate, "checkout", checkoutDate);
  }, [value]);

  const today = new Date();

  return (
    <div className="calendar_">
      {!arriveDate && (
        <div>
          <Calendar
            onChange={handleDateChange}
            minDate={today}
            value={value}
            minDetail="decade"
            nextLabel={<i className="fa-solid fa-chevron-right fa-lg"></i>}
            prevLabel={<i className="fa-solid fa-chevron-left fa-lg"></i>}
            next2Label={null}
            prev2Label={null}
            className="react-calendar"
          />
        </div>
      )}
      {arriveDate && !checkoutDate && (
        <div>
          <Calendar
            onChange={handleDateChange}
            value={[arriveDate, value]}
            minDate={arriveDate}
            minDetail="decade"
            nextLabel={<i className="fa-solid fa-chevron-right fa-lg"></i>}
            prevLabel={<i className="fa-solid fa-chevron-left fa-lg"></i>}
            next2Label={null}
            prev2Label={null}
            className="react-calendar"
          />
        </div>
      )}
      {arriveDate && checkoutDate && (
        <>
        <Calendar
        onChange={handleDateChange}
        value={[arriveDate, checkoutDate]}
        minDate={today}
        minDetail="decade"
        nextLabel={<i className="fa-solid fa-chevron-right fa-lg"></i>}
        prevLabel={<i className="fa-solid fa-chevron-left fa-lg"></i>}
        next2Label={null}
        prev2Label={null}
        className="react-calendar"
      />
    </>
      )}
    </div>
  );
};

export default Calendar_;
