import React from "react";

const Button = (props) => (
  <button
    name={props.name}
    type={props.type}
    disabled={props.disabled}
    onClick={props.onClick}
    className={props.className}
  >
    {props.children}
  </button>
);

export default Button;
