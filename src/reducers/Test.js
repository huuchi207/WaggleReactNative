import * as types from "../actions/Types";

const INITIAL = {
  success: null,
  error: null,
  loading: false
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case types.TEST_API_ACTION:
      return {
        loading: true
      };
    case types.TEST_SUCCESS:
      let data = action.response.list;
      return {
        success: data,
        error: null,
        loading: false
      };
    case types.TEST_FAIL:
      let error = action.response;
      return {
        ...state,
        loading: false,
        error: error
      };
    case types.TEST_ERROR:
      return {
        ...state,
        error: null,
        success: null,
        loading: false
      };
    default:
      return state;
  }
};
