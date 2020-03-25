import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { searchReducer } from './searchReducer'

export const rootReducer = combineReducers({
  users: userReducer,
  search: searchReducer
});
