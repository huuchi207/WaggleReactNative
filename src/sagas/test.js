import { takeLatest, put } from "redux-saga/effects";
import * as types from "../actions/Types";
import { test } from "./api/test";

function* doTest(action) {
  try {
    const response = yield test("");
    if (response.error) {
      yield put({ type: types.TEST_ERROR, response: response });
    } else {
      yield put({ type: types.TEST_SUCCESS, response: response });
    }
  } catch (e) {
    yield put({ type: types.TEST_FAIL });
  }
}

export function* watchTestAction() {
  yield takeLatest(types.TEST_API_ACTION, doTest);
}
