import { GET, POST, GET_TEST } from "./index";

export function login(param) {
  let path = "user/login";
  return POST(path, param);
}
