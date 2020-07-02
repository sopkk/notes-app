import React from "react";
import { string, func } from "prop-types"; // ES6

import "./Note.css";

const Note = ({
  id,
  title,
  body,
  authorName,
  createdAt,
  onDelete,
  onClick,
  className,
}) => {
  const handleDelete = (event) => {
    event.stopPropagation();
    onDelete(id);
  };

  return (
    <div className={className} onClick={() => onClick(id)}>
      <div className="modal-header">
        <h5 className="card-title">{title}</h5>
        <span className="note-delete" onClick={handleDelete}>
          &times;
        </span>
      </div>
      <div className="modal-body h-200">
        <h6 className="card-subtitle mb-2 text-muted">
          created by {authorName}
        </h6>
        <p className="card-text">{body}</p>
      </div>
      <div className="card-footer text-muted text-center font-italic">
        {createdAt}
      </div>
    </div>
  );
};

Note.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  body: string.isRequired,
  authorName: string.isRequired,
  createdAt: string.isRequired,
  onDelete: func.isRequired,
  onClick: func.isRequired,
  className: string,
};

export default Note;
