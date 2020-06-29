import * as constants from "./constants";

export const getNotes = (notes) => ({
  type: constants.GET_NOTES,
  payload: { notes },
});
