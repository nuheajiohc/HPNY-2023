import { BASE_URL, END_POINT } from "../utils/url.js";

export default class PostApi {
  async getPostList() {
    try {
      const response = await fetch(BASE_URL + END_POINT.POST_LIST);
      const { data } = await response.json();
      return data.posts;
    } catch (err) {
      console.log(err);
    }
  }

  async getPost(postNumber) {
    try {
      const response = await fetch(BASE_URL + postNumber);
      const { data } = await response.json();
      return await data;
    } catch (err) {
      console.log(err);
    }
  }

  async addPost(titleValue, contentValue, imgUrl) {
    try {
      const response = await fetch(BASE_URL + END_POINT.ADD_POST, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: titleValue,
          content: contentValue,
          image: imgUrl,
        }),
      });
      if (response.status === 400) {
        throw new Error("중복 게시물은 작성할 수 없습니다.");
      }
    } catch (err) {
      console.log(err);
    }
  }

  async deletePost(postHref) {
    try {
      await fetch(BASE_URL + postHref, { method: "DELETE" });
    } catch (err) {
      console.log(err);
    }
  }

  async editPost(postNumber, titleValue, contentValue, imgUrl) {
    try {
      await fetch(BASE_URL + "/post/" + postNumber, {
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
    } catch (err) {
      console.log(err);
    }
  }
}
