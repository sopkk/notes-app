import React from "react";
import { string, bool, func } from "prop-types";

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

Button.propTypes = {
  name: string.isRequired,
  type: string.isRequired,
  disabled: bool,
  onClick: func.isRequired,
  className: string,
  children: string,
};

export default Button;
