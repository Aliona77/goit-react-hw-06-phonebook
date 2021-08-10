import { ADD_CONTACT } from "../types";

export const addContact = (formData) => ({
  type: ADD_CONTACT,
  payload: formData,
});
