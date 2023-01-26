import { BASE_URL } from "../utils/url.js";

export default function postDeleteApi(postNumber) {
  return fetch(BASE_URL + "/post" + postNumber, { method: "DELETE" });
}
