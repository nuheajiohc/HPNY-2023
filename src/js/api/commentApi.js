import { BASE_URL } from "../utils/url.js";

export default class CommentApi {
  async addComment(postNumber, contentValue) {
    return await fetch(BASE_URL + "/comment" + postNumber, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: contentValue,
      }),
    });
  }

  async deleteComment(commentId) {
    return await fetch(BASE_URL + "/comment/" + commentId, {
      method: "DELETE",
    }).then(res => res.json());
  }
}
