//===========REDUX_TOOLKIT==============
import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/add", ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name: name,
    number: number,
  },
}));

export const deleteContact = createAction("contacts/delete");

export const changeFilter = createAction("contacts/changeFilter");

//=======================REDUX==============

// import types from "./phonebook-types";
// import shortid from "shortid";

// const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     name: name,
//     number: number,
//   },
// });

// const deleteContact = (contactId) => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   pyload: value,
// });

// export default { addContact, deleteContact, changeFilter };
