import { combineReducers } from "redux";
import contactReducer from "./contact";
import filterReducer from "./filter";

export const rootReducer = combineReducers({
  items: contactReducer,
  filter: filterReducer,
});
