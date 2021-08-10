import { ADD_CONTACT } from "../types";

const initialState = [];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default contactReducer;
