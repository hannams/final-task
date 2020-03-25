import { FETCH_USERS, ADD_USER } from "./actionList";

export function fetchUsers(users) {
  return {
    type: FETCH_USERS,
    payload: users
  };
}

export function addUser(user) {
  return {
    type: ADD_USER,
    payload: user
  }
}

export function usersFetchData() {
  return dispatch => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => checkResponse(response))
      .then(json => dispatch(fetchUsers(json)));
  };
}

const checkResponse = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
};
