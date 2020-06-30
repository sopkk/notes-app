import React from "react";

import Note from "../note/Note";
import "./Notes.css";

const Notes = ({ data, onDelete, onClick, className }) => (
  <div className={className}>
    {data.map((note) => (
      <Note
        key={note.id}
        id={note.id}
        title={note.title}
        body={note.body}
        authorName={note.authorName}
        createdAt={note.createdAt}
        status={note.status}
        onDelete={onDelete}
        onClick={onClick}
      />
    ))}
  </div>
);

export default Notes;
