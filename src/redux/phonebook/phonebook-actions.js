import types from "./phonebook-types";
import shortid from "shortid";

//import { createAction } from "@reduxjs/toolkit";

const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name: name,
    number: number,
  },
});

const deleteContact = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = (value) => ({
  type: types.CHANGE_FILTER,
  pyload: value,
});

export default { addContact, deleteContact, changeFilter };
