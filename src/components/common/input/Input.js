import React from "react";

import "./Input.css";

const Input = (props) => {
  switch (props.tag) {
    case "input":
      return (
        <input
          type={props.type}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
          className="input-field"
        />
      );
    case "textarea":
      return (
        <textarea
          name={props.name}
          onChange={props.onChange}
          placeholder={props.placeholder}
          rows="3"
          className="textarea-field"
        ></textarea>
      );
    default:
      return (
        <input
          type={props.type}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
          className="input-field"
        />
      );
  }
};

export default Input;
