import { $ } from "../utils/dom.js";
import PostApi from "../api/postApi.js";

export default class DetailPost {
  constructor() {
    document.title = "HPNY 2023 | detailPost";
  }

  async render(postNumber) {
    const postApi = new PostApi();
    const { post, comments } = await postApi.getPost(postNumber);
    $("#nav").innerHTML = `
    <a href="/" id="backIcon-wrapper">
      <img src="../src/images/left-arrow.png" />
    </a>
    <a href="/" id="nav-title">HPNY 2023</a>`;
    $("section").setAttribute("id", "detail-section");
    $("section").innerHTML = `
      <article id="post-article">
      <img src=${post.image} id="post-img">
        <strong>${post.title}</strong>
        <span>${post.createdAt.slice(0, 10)}</span>
        <p>${post.content}</p>
        <div id="post-btn-wrap">
        <button id="post-update-btn">수정 </button>
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
          <li id="comment" data-id=${comment.commentId}>
            <p>${comment.content}</p>
            <button id="comment-delete-btn">삭제</button>
          </li>
      `;
    });
  }
}
