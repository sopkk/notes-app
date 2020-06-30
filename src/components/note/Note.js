import React from "react";

import "./Note.css";

const Note = ({ id, title, body, authorName, createdAt, onDelete }) => (
  <div className="note">
    <span>{title}</span>
    <span className="delete" onClick={() => onDelete(id)}>
      &times;
    </span>
    <p>{body}</p>
    <div className="note-author-name">{authorName}</div>
    <div className="note-created-at">{createdAt.toString()}</div>
  </div>
);

export default Note;
