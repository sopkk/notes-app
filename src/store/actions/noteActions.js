import * as actionTypes from "./actionTypes";
import data from "../../notes.json";
import { getTimestamp } from "../../util";

export const PUBLISHED = "published";
export const DRAFT = "draft";

export const getNotes = () => {
  return (dispatch) => {
    dispatch(actionTypes.getNotes(data));
  };
};

export const saveNote = (note) => {
  return (dispatch) => {
    dispatch(
      actionTypes.saveNote({
        ...note,
        createdAt: getTimestamp(),
        status: PUBLISHED,
      })
    );
  };
};

export const deleteNote = (id) => {
  return (dispatch) => {
    dispatch(actionTypes.deleteNote(id));
  };
};

export const saveDraft = (note) => {
  return (dispatch) => {
    dispatch(
      actionTypes.saveDraft({
        ...note,
        createdAt: getTimestamp(),
        status: DRAFT,
      })
    );
  };
};

export const selectDraft = (id) => {
  return (dispatch) => {
    dispatch(actionTypes.selectDraft(id));
  };
};

export const publishDraft = (note) => {
  return (dispatch) => {
    dispatch(
      actionTypes.publishDraft({
        ...note,
        createdAt: getTimestamp(),
      })
    );
  };
};

export const deleteDraft = (id) => {
  return (dispatch) => {
    dispatch(actionTypes.deleteDraft(id));
  };
};

export const removeSelectedDraft = () => {
  return (dispatch) => {
    dispatch(actionTypes.removeSelectedDraft());
  };
};

export const filterNotes = (query) => {
  return (dispatch) => {
    dispatch(actionTypes.filterNotes(query));
  };
};

export const sortNotes = () => {
  return (dispatch) => {
    dispatch(actionTypes.sortNotes());
  };
};
