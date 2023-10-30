import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";


const Calendar_ = ({ arriveDate, setArriveDate, checkoutDate, setCheckoutDate }: CalenderProps ) => {
  

  const [value, setValue] = useState<CalenderValue>(new Date());

  const handleDateChange = (selectedDate: any) => {
    setValue(selectedDate);
    if (!arriveDate) {
      setArriveDate(selectedDate);
    } else {
      setCheckoutDate(selectedDate);
    }
  };

  useEffect(() => {
    console.log("arrive:", arriveDate, "checkout", checkoutDate);
  }, [value]);

  const today = new Date();

  return (
    <div>
      {!arriveDate && (
        <div>
          <h2 className="darkGray">Arrivedate</h2>
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
          <h3>Check out date</h3>
          <button onClick={() => setArriveDate(null)}>back</button>
          <Calendar
            onChange={handleDateChange}
            value={value}
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
          <button
            onClick={() => {
              setArriveDate(null); setCheckoutDate(null); setValue(new Date());
            }}
          >
            back
          </button>

          <p>{arriveDate?.toString()}</p>
          <p>{checkoutDate?.toString()}</p>
        </>
      )}
    </div>
  );
};

export default Calendar_;
