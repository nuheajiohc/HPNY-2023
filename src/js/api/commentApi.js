import { BASE_URL, END_POINT } from "/src/js/utils/url.js";

export default class CommentApi {
  async addComment(postNumber, contentValue) {
    return await fetch(BASE_URL + END_POINT.COMMENT + postNumber.split("/")[2], {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: contentValue,
      }),
    });
  }

  async deleteComment(commentId) {
    return await fetch(BASE_URL + END_POINT.COMMENT + commentId, {
      method: "DELETE",
    }).then(res => res.json());
  }
}
