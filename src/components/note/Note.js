import React from "react";

import "./Note.css";

const Note = (props) => (
  <div className="note">
    <span>{props.title}</span>
    <p>{props.body}</p>
    <div className="note-author-name">{props.authorName}</div>
  </div>
);

export default Note;
