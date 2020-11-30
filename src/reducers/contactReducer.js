import * as actionTypes from "../actions/actionType";

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_CONTACTS:
      return [...state, ...action.contact];
    case actionTypes.CREATE_NEW_CONTACT:
      return [...state, Object.assign({}, action.contact)];
    case actionTypes.UPDATE_CONTACT:
      return state.map((data, i) => {
        if (i === action.id) {
          data = action.contact;
        }
        return data;
      });
    case actionTypes.REMOVE_CONTACT:
      return state.filter((data, i) => i !== action.id);
    default:
      return state;
  }
};
