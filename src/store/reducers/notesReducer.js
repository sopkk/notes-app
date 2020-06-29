import * as constants from "../actions/constants";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_NOTES:
      return action.payload.notes;
    case constants.ADD_NOTE:
      return [
        ...state,
        { ...action.payload.note, id: state.length.toString() },
      ];
    default:
      return state;
  }
};

export default reducer;
