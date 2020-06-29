import * as constants from "../actions/constants";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_NOTES:
      return action.payload.notes;
    default:
      return state;
  }
};

export default reducer;
