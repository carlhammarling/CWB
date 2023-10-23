import React, { useState } from "react";
import "./DetailsImageContainer.scss";

const DetailsImageContainer = (props: CoworkingSpace) => {
  const [selectedImage, setSelectedImage] = useState(props.images[0]);

  const sortImage = (index: number) => {
    setSelectedImage(props.images[index]);
  };

  return (
    <div className="detailsImageContainer">
      <div
        className="bigImage"
        style={{ backgroundImage: `url(${selectedImage})` }}
      ></div>
      <div className="smallImageContainer">
        {props.images.slice(0, props.images.length - 1).map((image, index) => (
          <div
            key={index}
            onClick={() => sortImage(index)}
            className="smallImage"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default DetailsImageContainer;
