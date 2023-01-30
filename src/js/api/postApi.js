import { BASE_URL, END_POINT } from "../utils/url.js";

export default class PostApi {
  async getPostList() {
    const response = await fetch(BASE_URL + "/" + END_POINT.POST_LIST);
    const { data } = await response.json();
    return data.posts;
  }

  async getPost(postNumber) {
    const response = await fetch(BASE_URL + "/post" + postNumber);
    const { data } = await response.json();
    return data;
  }

  async addPost(titleValue, contentValue, imgUrl) {
    await fetch(BASE_URL + "/" + END_POINT.ADD_POST, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: titleValue,
        content: contentValue,
        image: imgUrl,
      }),
    });
  }

  async deletePost(postNumber) {
    return fetch(BASE_URL + "/post" + postNumber, { method: "DELETE" });
  }

  async editPost(postNumber, titleValue, contentValue, imgUrl) {
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
}
