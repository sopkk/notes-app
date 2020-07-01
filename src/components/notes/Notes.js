import React from "react";

import Note from "../note/Note";
import "./Notes.css";
import { func, string, arrayOf, shape } from "prop-types";

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

Notes.propTypes = {
  data: arrayOf(
    shape({
      id: string.isRequired,
      title: string.isRequired,
      body: string.isRequired,
      authorName: string.isRequired,
      createdAt: string.isRequired,
      status: string.isRequired,
    })
  ).isRequired,
  onDelete: func.isRequired,
  onClick: func.isRequired,
  className: string,
};

export default Notes;
