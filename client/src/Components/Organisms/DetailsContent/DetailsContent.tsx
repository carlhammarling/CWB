import React from "react";
import FacilityTextAtomRow from "../../molecules/FacilityTextAtomRow/FacilityTextAtomRow";
import "./DetailsContent.scss";
import AdressContact from "../../molecules/AdressContact/AdressContact";

const DetailsContent = (props: CoworkingSpace) => {
  return (
    <div className="detailsContent">
      <div>
        <h1>{props.name}</h1>
      </div>
      <AdressContact email={props.email} adress={props.adress} />
      <FacilityTextAtomRow facilities={props.facilities} />
      <p className="description">{props.description}</p>
    </div>
  );
};

export default DetailsContent;
