import * as types from "./Types";
export const templateAction = link => {
  return {
    type: types.TEMPLATE_API_ACTION,
    link: link
  };
};
