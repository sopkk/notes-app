import React from "react";

import { string, func } from "prop-types";

const Input = ({
  tag,
  type,
  name,
  value,
  placeholder,
  onChange,
  validationMessage,
  className,
}) => {
  switch (tag) {
    case "input":
      return (
        <div>
          <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className={className}
          />
          <label>{validationMessage}</label>
        </div>
      );
    case "textarea":
      return (
        <div>
          <textarea
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            rows="3"
            className={className}
          ></textarea>
          <label>{validationMessage}</label>
        </div>
      );
    default:
      return (
        <div>
          <label>{validationMessage}</label>
          <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className={className}
          />
        </div>
      );
  }
};

Input.propTypes = {
  tag: string.isRequired,
  type: string.isRequired,
  name: string.isRequired,
  value: string,
  placeholder: string,
  onChange: func,
  validationMessage: string,
  className: string,
};

export default Input;
