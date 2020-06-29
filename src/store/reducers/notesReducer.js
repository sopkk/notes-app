import * as constants from "../actions/constants";
import { generateUniqueId } from "../../util";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_NOTES:
      return action.payload.notes;
    case constants.ADD_NOTE:
      return [...state, { ...action.payload.note, id: generateUniqueId() }];
    case constants.DELETE_NOTE:
      return state.filter((note) => note.id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;
