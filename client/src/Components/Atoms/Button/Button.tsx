import React from "react";
import "./Button.scss";

const Button = (props: {text: string}) => {
  return (
      <button className="book">
        <h2>{props.text}</h2>
      </button>
  );
};

export default Button;
