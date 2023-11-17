import React from "react";
import './BookingSuccess.scss';


interface BookingSuccessProps {
  type: SuccessMsg;
}

const BookingSuccess = (props: BookingSuccessProps) => {
  if (props.type === "booking") {
    return (
      <div className="bookingSuccess">
        <h1>
          Thank you <br />
          for your <br />
          <span className="yellow">booking!</span>
        </h1>
      </div>
    );
  }
  if (props.type === "edit") {
    return (
      <div className="bookingSuccess">
        <h1>
          Your <span className="yellow">booking </span> <br />
          was successfully <br />
          <span className="yellow">updated!</span>
        </h1>
      </div>
    );
  }
  if (props.type === "delete") {
    return (
      <div className="bookingSuccess">
        <h1>
          Your <span className="yellow">booking </span> <br />
          was successfully <br />
          <span className="yellow">deleted!</span>
        </h1>
      </div>
    );
  }
  return (
    <div className="bookingSuccess">
      <h1>
        Thank you <br />
        for choosing <br />
        <span className="yellow">CWB!</span>
      </h1>
    </div>
  );
};

export default BookingSuccess;
