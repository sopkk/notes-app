import React from "react";

import "./Input.css";

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
          onChange={onChange}
          placeholder={placeholder}
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

export default Input;
