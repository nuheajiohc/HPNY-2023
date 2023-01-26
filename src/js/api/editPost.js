import { BASE_URL } from "../utils/url.js";

export default function postEditApi(
  postNumber,
  titleValue,
  contentValue,
  imgUrl,
) {
  return fetch(BASE_URL + "/post" + postNumber, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: titleValue,
      content: contentValue,
      image: imgUrl,
    }),
  }).then(res => res);
}
