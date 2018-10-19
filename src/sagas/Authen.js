import { takeLatest, put } from "redux-saga/effects";
import * as types from "../actions/Types";
import { login } from "./api/Authen";
import * as configConstant from "../config/ConfigConstant";
function* doLogin(action) {
  if (configConstant.FAKE) {
    yield put({
      type: types.LOGIN_SUCCESS,
      response: { data: { email: "test" } }
    });
    return;
  }
  try {
    let param = {
      email: action.user,
      password: action.pass
    };
    const response = yield login(param);
    if (!response.error) {
      yield put({ type: types.LOGIN_SUCCESS, response: response });
    } else {
      yield put({ type: types.LOGIN_ERROR, response: response });
    }
  } catch (e) {
    console.log(e);
    yield put({ type: types.LOGIN_FAIL });
  }
}

export function* watchLoginAction() {
  yield takeLatest(types.LOGIN_ACTION, doLogin);
}
