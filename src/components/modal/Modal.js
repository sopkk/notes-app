import React, { useState, useEffect } from "react";
import { bool, func, string, shape } from "prop-types";

import { isFormValid, getValidationMessage } from "../../validation";
import Button from "../common/button/Button";
import Input from "../common/input/Input";
import "./Modal.css";

const Modal = ({ isOpen, onClose, onSave, onSaveDraft, selectedDraft }) => {
  const emptyNote = {
    title: "",
    body: "",
    authorName: "",
  };

  const defaultValidationMessages = {
    title: { isValid: false, message: null },
    body: { isValid: false, message: null },
    authorName: { isValid: false, message: null },
  };
  const [note, setNote] = useState(emptyNote);
  const [validationMessages, setValidationMessages] = useState(
    defaultValidationMessages
  );

  useEffect(() => {
    if (selectedDraft) {
      setNote((state) => ({ ...state, ...selectedDraft }));
      setValidationMessages({
        title: { isValid: true, message: null },
        body: { isValid: true, message: null },
        authorName: { isValid: true, message: null },
      });
    }
  }, [selectedDraft]);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValidationMessages({
      ...validationMessages,
      [name]: getValidationMessage(name, value),
    });
    setNote({ ...note, [name]: value });
  };

  const handleSave = () => {
    onSave(note);
    setNote(emptyNote);
    setValidationMessages(defaultValidationMessages);
  };

  const handleDraft = () => {
    onSaveDraft(note);
    setNote(emptyNote);
    setValidationMessages(defaultValidationMessages);
  };

  const handleClose = () => {
    onClose();
    setNote(emptyNote);
    setValidationMessages(defaultValidationMessages);
  };

  return (
    isOpen && (
      <div className="note-modal">
        <div className="note-modal-content col-lg-6 col-sm-12">
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
            validationMessage={validationMessages["title"].message}
            className="input-field"
          />
          <Input
            tag="textarea"
            type="text"
            name="body"
            value={note.body}
            placeholder="Description*"
            onChange={handleChange}
            validationMessage={validationMessages["body"].message}
            className="textarea-field"
          />
          <Input
            tag="input"
            type="text"
            name="authorName"
            value={note.authorName}
            placeholder="Author*"
            onChange={handleChange}
            validationMessage={validationMessages["authorName"].message}
            className="input-field"
          />

          <Button
            name="add-note"
            type="button"
            onClick={handleSave}
            className="add-note-button"
            disabled={!isFormValid(validationMessages)}
          >
            Save
          </Button>
          <Button
            name="add-note"
            type="button"
            onClick={handleDraft}
            className="add-note-button"
            disabled={!isFormValid(validationMessages)}
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
