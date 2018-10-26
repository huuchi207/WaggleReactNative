import { GET } from "./index";

export function template(path) {
  return GET(path, "");
}
