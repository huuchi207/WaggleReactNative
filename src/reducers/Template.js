import * as types from "../actions/Types";

const INITIAL = {
  success: null,
  error: null,
  loading: false
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case types.TEMPLATE_API_ACTION:
      return {
        loading: true
      };
    case types.TEMPLATE_SUCCESS:
      let data = action.response.list;
      return {
        success: data,
        error: null,
        loading: false
      };
    case types.TEMPLATE_FAIL:
      let error = action.response;
      return {
        ...state,
        loading: false,
        error: error
      };
    case types.TEMPLATE_ERROR:
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
