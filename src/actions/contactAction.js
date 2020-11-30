import {
  CREATE_NEW_CONTACT,
  REMOVE_CONTACT,
  UPDATE_CONTACT,
  GET_ALL_CONTACTS,
} from "./actionType";
export const createContact = (contact) => {
  return {
    type: CREATE_NEW_CONTACT,
    contact: contact,
  };
};

export const updateContact = (id, contact) => {
  return {
    type: UPDATE_CONTACT,
    contact: contact,
    id: id,
  };
};

export const deleteContact = (id) => {
  return {
    type: REMOVE_CONTACT,
    id: id,
  };
};

export const getallContact = (contact) => {
  return {
    type: GET_ALL_CONTACTS,
    contact: contact,
  };
};

export const fetchAllContact = () => (dispatch) =>
  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => res.json())
    .then((data) =>{
      dispatch(getallContact(data));
    });
