import * as actionTypes from "./actionTypes";
import data from "../../notes.json";

export const getNotes = () => {
  return (dispatch) => {
    dispatch(actionTypes.getNotes(data));
  };
};
