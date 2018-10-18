import * as types from "./Types";
export const getData = link => {
  return {
    type: types.TEST_API_ACTION,
    link: link
  };
};
