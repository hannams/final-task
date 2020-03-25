import { FETCH_USERS, ADD_USER } from "../actions/actionList";

const initialState = [];

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return [...state, ...action.payload];
    case ADD_USER:
      return [
        ...state,
          {
            id: ++state.length,
            ...action.payload,
            address: {
              city: action.payload.city,
              street: action.payload.address.split(',')[0],
              suite: action.payload.address.split(',')[1]
            }
          }
      ]
    default:
      return state;
  }
}
