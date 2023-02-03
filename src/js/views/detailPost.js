import { $ } from "/src/js/utils/dom.js";
import PostApi from "/src/js/api/postApi.js";
import header from "/src/js/views/header.js";

export default class DetailPost {
  constructor() {
    document.title = "HPNY 2023 | detailPost";
    header();
  }

  async render(postNumber) {
    const postApi = new PostApi();
    const { post, comments } = await postApi.getPost(postNumber);
    const createTime = new Date(post.createdAt).toLocaleString();
    $("section").setAttribute("id", "detail-section");
    $("section").innerHTML = `
      <article id="post-article">
      <img src=${post.image} id="post-img">
        <strong>${post.title}</strong>
        <span>${createTime}</span>
        <p>${post.content}</p>
        <div id="post-btn-wrap">
        <button id="post-update-btn" data-post-id="${post.postId}">수정 </button>
        <button id="post-delete-btn">삭제 </button>
        </div>
      </article>
      <div id="comment-section">
      <form>
        <input id="comment-input">
        <button id="comment-posting">게시</button>
      </form>
      <ul id="comment-list">
      </ul>
      </div> `;
    comments.forEach(comment => {
      $("#comment-list").innerHTML += `
          <li id="comment" data-comment-id="${comment.commentId}">
            <p>${comment.content}</p>
            <button id="comment-delete-btn">삭제</button>
          </li>
      `;
    });
  }
}
