import { BASE_URL, ENT_POINT } from "../utils/url.js";

export default async function postListApi() {
  const response = await fetch(BASE_URL + ENT_POINT.POST_LIST);
  const { data } = await response.json();
  return data.posts;
}
