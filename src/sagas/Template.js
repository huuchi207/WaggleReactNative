import { takeLatest, put } from "redux-saga/effects";
import * as types from "../actions/Types";
import { template } from "./api/Template";

function* doWork(action) {
  try {
    const response = yield template("");
    if (response.error) {
      yield put({ type: types.TEMPLATE_ERROR, response: response });
    } else {
      yield put({ type: types.TEMPLATE_SUCCESS, response: response });
    }
  } catch (e) {
    yield put({ type: types.TEMPLATE_FAIL });
  }
}

export function* watchTestAction() {
  yield takeLatest(types.TEST_API_ACTION, doWork);
}
