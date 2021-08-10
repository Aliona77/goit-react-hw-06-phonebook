import contactsReducer from "./phonebook-reducer";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

//const reducer = (state = {}, action) => state;

const store = createStore(rootReducer, composeWithDevTools());
export default store;
