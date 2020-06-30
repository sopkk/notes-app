import * as constants from "./constants";

export const getNotes = (notes) => ({
  type: constants.GET_NOTES,
  payload: { notes },
});

export const saveNote = (note) => ({
  type: constants.SAVE_NOTE,
  payload: { note },
});

export const deleteNote = (id) => ({
  type: constants.DELETE_NOTE,
  payload: { id },
});

export const saveDraft = (note) => ({
  type: constants.SAVE_DRAFT,
  payload: { note },
});

export const selectDraft = (id) => ({
  type: constants.SELECT_DRAFT,
  payload: { id },
});

export const publishDraft = (note) => ({
  type: constants.PUBLISH_DRAFT,
  payload: { note },
});

export const deleteDraft = (id) => ({
  type: constants.DELETE_DRAFT,
  payload: { id },
});

export const removeSelectedDraft = () => ({
  type: constants.REMOVE_SELECTED_DRAFT,
});

export const filterNotes = (query) => ({
  type: constants.FILTER_NOTES,
  payload: { query },
});

export const sortNotes = () => ({
  type: constants.SORT_NOTES,
});
