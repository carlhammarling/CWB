import React from "react";
import "./Button.scss";

const Button = (props: {text: string}) => {
  return (
    <div className="buttonWrapper">
      <button>
        <h2>{props.text}</h2>
      </button>
    </div>
  );
};

export default Button;
