import { CREATE_NEW_CONTACT, REMOVE_CONTACT,UPDATE_CONTACT } from "./actionType";
export const createContact = (contact) => {
  return {
    type: CREATE_NEW_CONTACT,
    contact: contact,
  };
};

export const updateContact = (id,contact) => {
  return {
    type: UPDATE_CONTACT,
    contact: contact,
    id:id
  };
};

export const deleteContact = (id) => {
  return {
    type: REMOVE_CONTACT,
    id: id,
  };
};
