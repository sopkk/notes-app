import React, { useState, useEffect } from "react";
import { bool, func, string, shape } from "prop-types";

import Button from "../common/button/Button";
import Input from "../common/input/Input";
import { isFormValid, getValidationMessage } from "../../validation";
import "./Modal.css";

const Modal = ({ isOpen, onClose, onSave, onSaveDraft, selectedDraft }) => {
  const emptyNote = {
    title: "",
    body: "",
    authorName: "",
  };
  const [note, setNote] = useState(emptyNote);
  const [validationMessage, setValidationMessage] = useState({
    title: { isValid: false, message: null },
    body: { isValid: false, message: null },
    authorName: { isValid: false, message: null },
  });

  useEffect(() => {
    if (selectedDraft) {
      setNote((state) => ({ ...state, ...selectedDraft }));
    }
  }, [selectedDraft]);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValidationMessage({
      ...validationMessage,
      [name]: getValidationMessage(name, value),
    });
    setNote({ ...note, [name]: value });
  };

  const handleSave = () => {
    onSave(note);
    setNote(emptyNote);
  };

  const handleDraft = () => {
    onSaveDraft(note);
    setNote(emptyNote);
  };

  const handleClose = () => {
    onClose();
    setNote(emptyNote);
  };

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={handleClose}>
            &times;
          </span>

          <Input
            tag="input"
            type="text"
            name="title"
            value={note.title}
            placeholder="Title*"
            onChange={handleChange}
            validationMessage={validationMessage["title"].message}
          />
          <Input
            tag="textarea"
            type="text"
            name="body"
            value={note.body}
            placeholder="Description*"
            onChange={handleChange}
            validationMessage={validationMessage["body"].message}
          />
          <Input
            tag="input"
            type="text"
            name="authorName"
            value={note.authorName}
            placeholder="Author*"
            onChange={handleChange}
            validationMessage={validationMessage["authorName"].message}
          />
          <Button
            name="add-note"
            type="button"
            onClick={handleSave}
            className="add-note-button"
            disabled={!isFormValid(validationMessage)}
          >
            Save
          </Button>
          <Button
            name="add-note"
            type="button"
            onClick={handleDraft}
            className="add-note-button"
            disabled={!isFormValid(validationMessage)}
          >
            Save as draft
          </Button>
        </div>
      </div>
    )
  );
};

Modal.propTypes = {
  isOpen: bool.isRequired,
  onClose: func.isRequired,
  onSave: func.isRequired,
  onSaveDraft: func.isRequired,
  selectedDraft: shape({
    id: string.isRequired,
    title: string.isRequired,
    body: string.isRequired,
    authorName: string.isRequired,
    createdAt: string.isRequired,
    status: string.isRequired,
  }),
};

export default Modal;
