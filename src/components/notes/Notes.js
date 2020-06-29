import React from "react";
import Note from "../note/Note";
import data from "../../notes.json";
import "./Notes.css";

const Notes = (props) => {
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
