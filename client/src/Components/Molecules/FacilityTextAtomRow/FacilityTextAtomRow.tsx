import React from "react";
import "./FacilityTextAtomRow.scss";

const FacilityTextAtomRow = (props: FacilityAtomProps) => {
  return (
    <ul className="facilityTextAtomRow">
      {props.facilities?.includes("food") && (
        <li>
          <i className="fa-solid fa-utensils"></i>
          <p className="xsRadjhani">FOOD</p>
        </li>
      )}
      {props.facilities?.includes("coffee") && (
        <li>
          <i className="fa-solid fa-mug-hot"></i>
          <p className="xsRadjhani">FREE COFFEE</p>

        </li>
      )}
      {props.facilities?.includes("gym") && (
        <li>
          <i className="fa-solid fa-dumbbell"></i>
          <p className="xsRadjhani">GYM</p>

        </li>
      )}
      {props.facilities?.includes("activities") && (
        <li>
          <i className="fa-solid fa-medal"></i>
          <p className="xsRadjhani">ACTIVITIES</p>

        </li>
      )}
      {props.facilities?.includes("safetybox") && (
        <li>
          <i className="fa-solid fa-lock"></i>
          <p className="xsRadjhani">SAFETY BOX</p>

        </li>
      )}
    </ul>
  );
};

export default FacilityTextAtomRow;
