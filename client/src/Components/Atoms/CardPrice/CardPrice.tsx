import React, { useState } from "react";
import "./CardPrice.scss";

const CardPrice = (price: Price) => {



  return (
    <div className="cardPrice">
        <p className="xs bold">{price.week} THB / week</p>
    </div>
  );
};

export default CardPrice;
