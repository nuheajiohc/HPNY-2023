import { BASE_URL } from "../utils/url.js";

export default function commentApi(postNumber, contentValue) {
  return fetch(BASE_URL + "/comment" + postNumber, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: contentValue,
    }),
  });
}
