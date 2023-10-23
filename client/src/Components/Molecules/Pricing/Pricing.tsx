import React from "react";
import "./Pricing.scss";

const Pricing = (price: Price) => {
  return (
    <div className="pricing">
      <div className="header">
        <h2>Pricing </h2>
          <div className="h2">
            <i className="fa-solid fa-credit-card fa-sm"></i>
          </div>
      </div>
      <p className="lightGray">{price.day} THB / day</p>
      <p className="lightGray">{price.week} THB / week</p>
      <p className="lightGray">{price.month} THB / month</p>
    </div>
  );
};

export default Pricing;
