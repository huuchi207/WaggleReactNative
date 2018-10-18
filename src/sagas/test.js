import { takeLatest, put } from "redux-saga/effects";
import * as types from "../actions/Types";
import { test } from "./api/test";

function* doTest(action) {
  try {
    const response = yield test("");
    if (response.error) {
      yield put({ type: types.REQUEST_API_ERROR });
    } else {
      yield put({ type: types.REQUEST_API_SUCCESS });
    }
  } catch (e) {
    yield put({ type: types.REQUEST_API_FAIL });
  }
}

export function* watchTestAction() {
  yield takeLatest(types.TEST_API_ACTION, doTest);
}
