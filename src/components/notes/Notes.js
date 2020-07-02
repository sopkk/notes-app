import React from "react";
import { func, string, arrayOf, shape } from "prop-types";

import Note from "../note/Note";

const Notes = ({ data, onDelete, onClick, className = "col-12" }) => (
  <div className={className}>
    <div className="row">
      {data.map((note) => (
        <div
          className={
            note.status === "published"
              ? "card-group col-lg-4 col-sm-12 pt-2"
              : "card-group col-lg-12 col-sm-12 pt-1"
          }
          key={note.id}
        >
          <Note
            id={note.id}
            title={note.title}
            body={note.body}
            authorName={note.authorName}
            createdAt={note.createdAt}
            onDelete={onDelete}
            onClick={onClick}
            className={
              note.status === "published"
                ? "card text-white bg-dark"
                : "card text-secondary border-secondary"
            }
          />
        </div>
      ))}
    </div>
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
