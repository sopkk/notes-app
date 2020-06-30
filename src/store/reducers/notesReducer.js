import * as constants from "../actions/constants";
import {
  generateUniqueId,
  sortByNewestDate,
  filterByTitle,
  deleteById,
} from "../../util";

const initialState = { items: [], filteredItems: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_NOTES:
      return { ...state, items: action.payload.notes };
    case constants.ADD_NOTE:
      console.log(action.payload.note);
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
        items: deleteById(state.items, action.payload.id),
      };
    case constants.FILTER_NOTES:
      state.filteredItems = [...state.items];
      return {
        ...state,
        filteredItems: filterByTitle(state.filteredItems, action.payload.query),
      };
    case constants.SORT_NOTES:
      return {
        ...state,
        items: sortByNewestDate(state.items),
      };
    default:
      return state;
  }
};

export default reducer;
