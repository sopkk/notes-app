import React from "react";
import { string, func } from "prop-types"; // ES6

import "./Note.css";

const Note = ({
  id,
  title,
  body,
  authorName,
  createdAt,
  status,
  onDelete,
  onClick,
}) => {
  const handleDelete = (event) => {
    event.stopPropagation();
    onDelete(id);
  };

  return (
    <div className="note" onClick={() => onClick(id)}>
      <span>{title}</span>
      <span className="delete" onClick={handleDelete}>
        &times;
      </span>
      <p>{body}</p>
      <div className="note-author-name">{authorName}</div>
      <div className="note-created-at">{createdAt}</div>
      <div>{status}</div>
    </div>
  );
};

Note.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  body: string.isRequired,
  authorName: string.isRequired,
  createdAt: string.isRequired,
  status: string.isRequired,
  onDelete: func.isRequired,
  onClick: func.isRequired,
};

export default Note;
