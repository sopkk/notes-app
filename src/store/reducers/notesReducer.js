import * as constants from "../actions/constants";
import { generateUniqueId } from "../../util";

const initialState = { items: [], filteredItems: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_NOTES:
      return { ...state, items: action.payload.notes };
    case constants.ADD_NOTE:
      return {
        ...state,
        items: [
          ...state.items,
          { id: generateUniqueId(), ...action.payload.note },
        ],
      };
    case constants.DELETE_NOTE:
      return {
        ...state,
        items: state.items.filter((note) => note.id !== action.payload.id),
      };
    case constants.FILTER_NOTES:
      state.filteredItems = [...state.items];
      return {
        ...state,
        filteredItems: state.filteredItems.filter((note) =>
          note.title.toLowerCase().includes(action.payload.query.toLowerCase())
        ),
      };
    default:
      return state;
  }
};

export default reducer;
