import React, { useState } from "react";

import Button from "../common/button/Button";
import Input from "../common/input/Input";
import "./Modal.css";

const Modal = (props) => {
  const [note, setNote] = useState({
    title: "",
    body: "",
    authorName: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setNote({ ...note, [name]: value });
  };

  return (
    props.isOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={props.onClose}>
            &times;
          </span>
          <Input
            tag="input"
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
          />
          <Input
            tag="textarea"
            type="text"
            name="body"
            placeholder="Description"
            onChange={handleChange}
          />
          <Input
            tag="input"
            type="text"
            name="authorName"
            placeholder="Author"
            onChange={handleChange}
          />
          <Button
            name="add-note"
            type="button"
            onClick={() => props.onSave(note)}
            className="add-note-button"
          >
            Add note
          </Button>
        </div>
      </div>
    )
  );
};

export default Modal;
