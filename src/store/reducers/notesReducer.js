import * as constants from "../actions/constants";
import {
  generateUniqueId,
  sortByNewestDate,
  filterByTitle,
  deleteById,
  getElemById,
  addOrReplaceItem,
} from "../../util";
import { PUBLISHED } from "../actions/noteActions";

const initialState = {
  items: [],
  filteredItems: [],
  drafts: [],
  selectedDraft: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_NOTES:
      return { ...state, items: action.payload.notes };
    case constants.SAVE_NOTE:
      const { note } = action.payload;
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: generateUniqueId(),
            ...note,
          },
        ],
      };
    case constants.DELETE_NOTE:
      return {
        ...state,
        items: deleteById(state.items, action.payload.id),
      };
    case constants.SAVE_DRAFT:
      return {
        ...state,
        drafts: addOrReplaceItem(state.drafts, action.payload.note),
      };
    case constants.SELECT_DRAFT:
      return {
        ...state,
        selectedDraft: getElemById(state.drafts, action.payload.id),
      };
    case constants.PUBLISH_DRAFT:
      return {
        ...state,
        items: [
          ...state.items,
          {
            ...action.payload.note,
            status: PUBLISHED,
          },
        ],
        drafts: deleteById(state.drafts, action.payload.note.id),
        selectedDraft: null,
      };
    case constants.DELETE_DRAFT:
      return {
        ...state,
        drafts: deleteById(state.drafts, action.payload.id),
      };
    case constants.REMOVE_SELECTED_DRAFT:
      return {
        ...state,
        selectedDraft: null,
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
