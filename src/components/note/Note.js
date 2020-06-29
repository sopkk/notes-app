import React from "react";
import "./Note.css";

const Note = (props) => {
  return (
    <div className="note">
      <span>{props.title}</span>
      <p> {props.body}</p>
      <div className="note-author-name">{props.author_name}</div>
    </div>
  );
};

export default Note;
