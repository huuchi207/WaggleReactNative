import * as types from "./Types";
export const getData = link => {
  console.log("action getData");
  return {
    type: types.TEST_API_ACTION,
    link: link
  };
};
