import { IMAGE_URL } from "/src/js/utils/url.js";

export default async function imageApi() {
  const response = await fetch(IMAGE_URL);
  return response.url;
}
