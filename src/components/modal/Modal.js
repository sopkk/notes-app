import React, { useState, useEffect } from "react";

import Button from "../common/button/Button";
import Input from "../common/input/Input";
import "./Modal.css";
import { bool, func, string, shape } from "prop-types";

const Modal = ({ isOpen, onClose, onSave, onSaveDraft, selectedDraft }) => {
  const emptyNote = {
    title: "",
    body: "",
    authorName: "",
  };
  const [note, setNote] = useState(emptyNote);

  useEffect(() => {
    if (selectedDraft) {
      setNote((state) => ({ ...state, ...selectedDraft }));
    }
  }, [selectedDraft]);

  const handleChange = (event) => {
    const { value, name } = event.target;
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
            placeholder="Title"
            onChange={handleChange}
          />
          <Input
            tag="textarea"
            type="text"
            name="body"
            value={note.body}
            placeholder="Description"
            onChange={handleChange}
          />
          <Input
            tag="input"
            type="text"
            name="authorName"
            value={note.authorName}
            placeholder="Author"
            onChange={handleChange}
          />
          <Button
            name="add-note"
            type="button"
            onClick={handleSave}
            className="add-note-button"
            disabled={!(note.title && note.body && note.authorName)}
          >
            Save
          </Button>
          <Button
            name="add-note"
            type="button"
            onClick={handleDraft}
            className="add-note-button"
            disabled={!(note.title && note.body && note.authorName)}
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
