import { BASE_URL, END_POINT } from "../utils/url.js";

export default async function submitPostApi(titleValue, contentValue, imgUrl) {
  await fetch(BASE_URL + "/" + END_POINT.SUBMIT_POST, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: titleValue,
      content: contentValue,
      image: imgUrl,
    }),
  });
}
