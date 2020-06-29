import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../store/actions/noteActions";
import { selectNotes } from "../../store/selectors/selectNotes";
import Note from "../note/Note";
import "./Notes.css";

const Notes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getNotes());
  }, [dispatch]);

  const data = useSelector(selectNotes);
  const notes = data.map((note) => (
    <Note
      key={note.id}
      title={note.title}
      body={note.body}
      author_name={note.author_name}
    />
  ));

  return <div className="notes">{notes}</div>;
};

export default Notes;
