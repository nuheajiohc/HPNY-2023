import { BASE_URL, END_POINT } from "../utils/url.js";

export default async function postListApi() {
  const response = await fetch(BASE_URL + "/" + END_POINT.POST_LIST);
  const { data } = await response.json();
  return data.posts;
}
