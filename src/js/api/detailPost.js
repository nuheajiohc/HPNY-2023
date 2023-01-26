import { BASE_URL } from "../utils/url.js";

export default function detailPostApi(postNumber) {
  return fetch(BASE_URL + "/post" + postNumber)
    .then(res => res.json())
    .then(({ data }) => data);
}
