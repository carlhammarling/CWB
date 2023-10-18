import React, { useState } from "react";
import "./CardPrice.scss";

const CardPrice = (props: CardPriceProps) => {

  //Function that makes it possible to click the price and switch between the values.
  const [toggler, setToggler] = useState(0);
  const togglePrice = () => {
    let increase: number = toggler + 1;
    if (toggler >= 2) {
      setToggler(0);
    } else {
      setToggler(increase);
    }
  };

  return (
    <div className="cardPrice" onClick={togglePrice}>
      {toggler === 0 && (
        <p className="xs bold">{props.price.week} THB / week</p>
      )}
      {toggler === 1 && (
        <p className="xs bold">{props.price.month} THB / month</p>
      )}
      {toggler === 2 && <p className="xs bold">{props.price.day} THB / day</p>}
    </div>
  );
};

export default CardPrice;
