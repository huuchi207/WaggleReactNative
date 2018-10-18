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
    case types.REQUEST_API_SUCCESS:
      let data = action.response.data;
      return {
        success: data,
        error: null,
        loading: false
      };
    default:
      return state;
  }
};
