import * as actionTypes from "./actionTypes";
import data from "../../notes.json";

export const getNotes = () => {
  return (dispatch) => {
    dispatch(actionTypes.getNotes(data));
  };
};

export const addNote = (note) => {
  return (dispatch) => {
    dispatch(actionTypes.addNote({ ...note, createdAt: new Date() }));
  };
};

export const deleteNote = (id) => {
  return (dispatch) => {
    dispatch(actionTypes.deleteNote(id));
  };
};

export const filterNotes = (query) => {
  return (dispatch) => {
    dispatch(actionTypes.filterNotes(query));
  };
};
