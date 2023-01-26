import { BASE_URL } from "../utils/url.js";

export default function commentDeleteApi(commentId) {
  return fetch(BASE_URL + "/comment/" + commentId, { method: "DELETE" }).then(res => res.json());
}
