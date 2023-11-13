import React from "react";
import './AdressContact.scss'

const AdressContact = (props: AdressContactProps) => {
  return (
    <div className="adressContact">
      <p className="xs">
        <i className="fa-solid fa-location-dot fa-sm"></i>{" "}
        {props.adress}
      </p>
      <p className="xs">
        <i className="fa-regular fa-envelope fa-sm"></i>{" "}
        {props.email}
      </p>
    </div>
  );
};

export default AdressContact;
