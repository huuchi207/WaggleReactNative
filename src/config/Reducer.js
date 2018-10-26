import { combineReducers } from "redux";
import login from "../reducers/Login";
import test from "../reducers/Test";

export default combineReducers({
  login,
  test
  //TODO: add another reducer in here
});
