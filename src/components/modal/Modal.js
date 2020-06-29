import React, { useState } from "react";

import Button from "../common/button/Button";
import Input from "../common/input/Input";
import "./Modal.css";

const Modal = ({ isOpen, onClose, onSave }) => {
  const emptyNote = {
    title: "",
    body: "",
    authorName: "",
  };
  const [note, setNote] = useState(emptyNote);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setNote({ ...note, [name]: value });
  };

  const handleClick = () => {
    onSave(note);
    setNote(emptyNote);
  };

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
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
            onClick={handleClick}
            className="add-note-button"
            disabled={!(note.title && note.body && note.authorName)}
          >
            Add note
          </Button>
        </div>
      </div>
    )
  );
};

export default Modal;
