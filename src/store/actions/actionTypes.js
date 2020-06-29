import * as constants from "./constants";

export const getNotes = (notes) => ({
  type: constants.GET_NOTES,
  payload: { notes },
});

export const addNote = (note) => ({
  type: constants.ADD_NOTE,
  payload: { note },
});
