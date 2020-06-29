import React from "react";

const Button = ({ name, type, disabled, onClick, className, children }) => (
  <button
    name={name}
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={className}
  >
    {children}
  </button>
);

export default Button;
