import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectNotes } from "../../store/selectors/selectNotes";
import * as actions from "../../store/actions/noteActions";
import Button from "../common/button/Button";
import Modal from "../modal/Modal";
import Note from "../note/Note";
import "./Notes.css";

const Notes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getNotes());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(actions.deleteNote(id));
  };

  const data = useSelector(selectNotes);
  const notes = data.map((note) => (
    <Note
      key={note.id}
      id={note.id}
      title={note.title}
      body={note.body}
      authorName={note.authorName}
      createdAt={note.createdAt}
      onDelete={handleDelete}
    />
  ));

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSave = (note) => {
    dispatch(actions.addNote(note));
    setIsModalOpen(false);
  };

  return (
    <div className="notes">
      <Button
        name="add-note-modal-button"
        type="button"
        onClick={handleClick}
        className="add-note-modal-button"
      >
        +
      </Button>
      {notes}
      <Modal isOpen={isModalOpen} onClose={handleClose} onSave={handleSave} />
    </div>
  );
};

export default Notes;
