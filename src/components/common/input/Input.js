import React from "react";

import "./Input.css";
import { string, func } from "prop-types";

const Input = ({ tag, type, name, value, placeholder, onChange }) => {
  switch (tag) {
    case "input":
      return (
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="input-field"
        />
      );
    case "textarea":
      return (
        <textarea
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          rows="3"
          className="textarea-field"
        ></textarea>
      );
    default:
      return (
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="input-field"
        />
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
};

export default Input;
