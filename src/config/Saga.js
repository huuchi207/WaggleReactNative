import { all, fork } from "redux-saga/effects";
import * as authen from "../sagas/Authen";
import * as test from "../sagas/test";
export default function* rootSaga() {
  // yield all([...Object.values(authen)].map(fork));
  yield [authen.watchLoginAction(), test.watchTestAction()];
}
