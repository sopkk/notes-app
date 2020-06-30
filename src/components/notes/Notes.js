import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectNotes,
  selectFilteredNotes,
} from "../../store/selectors/selectNotes";
import * as actions from "../../store/actions/noteActions";
import Button from "../common/button/Button";
import Input from "../common/input/Input";
import Modal from "../modal/Modal";
import Note from "../note/Note";
import "./Notes.css";

const Notes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getNotes());
  }, [dispatch]);

  const notes = useSelector(selectNotes);
  const filteredNotes = useSelector(selectFilteredNotes);
  const data = query === "" ? notes : filteredNotes;

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    dispatch(actions.deleteNote(id));
  };

  const handleSave = (note) => {
    dispatch(actions.addNote(note));
    setIsModalOpen(false);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);
    dispatch(actions.filterNotes(value));
  };

  const handleSort = () => {
    console.log("sorting...");
    dispatch(actions.sortNotes());
  };

  return (
    <div>
      <Input
        tag="input"
        type="text"
        name="search"
        placeholder="Search by title..."
        onChange={handleChange}
      />
      {!query && (
        <Button
          name="sort-button"
          type="button"
          className="sort-button"
          onClick={handleSort}
        >
          Sort
        </Button>
      )}

      <div className="notes">
        {!query && (
          <Button
            name="add-note-modal-button"
            type="button"
            onClick={handleClick}
            className="add-note-modal-button"
          >
            +
          </Button>
        )}
        {data.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
            authorName={note.authorName}
            createdAt={note.createdAt}
            onDelete={handleDelete}
          />
        ))}
        <Modal isOpen={isModalOpen} onClose={handleClose} onSave={handleSave} />
      </div>
    </div>
  );
};

export default Notes;
