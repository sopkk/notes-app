import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../store/actions/noteActions";
import Button from "../common/button/Button";
import Input from "../common/input/Input";
import Modal from "../modal/Modal";
import Notes from "../notes/Notes";
import {
  selectDrafts,
  selectNotes,
  selectFilteredNotes,
  selectDraft,
} from "../../store/selectors/selectNotes";
import { DRAFT } from "../../store/actions/noteActions";

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getNotes());
  }, [dispatch]);

  const notes = useSelector(selectNotes);
  const filteredNotes = useSelector(selectFilteredNotes);
  const data = query === "" ? notes : filteredNotes;

  const drafts = useSelector(selectDrafts);
  const selectedDraft = useSelector(selectDraft);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    dispatch(actions.removeSelectedDraft());
    setIsModalOpen(false);
  };

  const handleSaveNote = (note) => {
    note.id && note.status === DRAFT
      ? dispatch(actions.publishDraft(note))
      : dispatch(actions.saveNote(note));
    setIsModalOpen(false);
  };

  const handleSaveDraft = (note) => {
    dispatch(actions.saveDraft(note));
    setIsModalOpen(false);
  };

  const handleDeleteNote = (id) => {
    dispatch(actions.deleteNote(id));
  };

  const handleDeleteDraft = (id) => {
    dispatch(actions.deleteDraft(id));
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);
    dispatch(actions.filterNotes(value));
  };

  const handleSort = () => {
    dispatch(actions.sortNotes());
  };

  const handleDraft = (id) => {
    dispatch(actions.selectDraft(id));
    setIsModalOpen(true);
  };

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleClose}
        onSave={handleSaveNote}
        onSaveDraft={handleSaveDraft}
        selectedDraft={selectedDraft}
      />
      <Input
        tag="input"
        type="text"
        name="search"
        placeholder="Search by title..."
        onChange={handleChange}
      />
      {!query && (
        <div>
          <Button
            name="add-note-modal-button"
            type="button"
            onClick={handleClick}
            className="add-note-modal-button"
          >
            +
          </Button>
          <Button
            name="sort-button"
            type="button"
            className="sort-button"
            onClick={handleSort}
          >
            Sort
          </Button>
        </div>
      )}
      <Notes data={data} onDelete={handleDeleteNote} onClick={() => {}} />
      {!query && (
        <Notes
          data={drafts}
          onDelete={handleDeleteDraft}
          onClick={handleDraft}
        />
      )}
    </div>
  );
};

export default MainPage;
