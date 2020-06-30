import React from "react";

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

export default Note;
