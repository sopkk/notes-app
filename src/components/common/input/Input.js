import React from "react";

import { string, func } from "prop-types";
import "./Input.css";

const Input = ({
  tag,
  type,
  name,
  value,
  placeholder,
  onChange,
  validationMessage,
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
            className="input-field"
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
            className="textarea-field"
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
            className="input-field"
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
};

export default Input;
