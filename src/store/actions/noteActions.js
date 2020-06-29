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
