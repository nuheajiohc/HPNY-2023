import { $ } from "../utils/dom.js";
import postListApi from "../api/postList.js";

export default function Home() {
  document.title = "HPNY 2023";
  this.render = async () => {
    $("#nav").innerHTML = `
        <a href="/" id="backIcon-wrapper" class="hidden">
          <img src="../src/images/left-arrow.png" />
        </a>
        <a href="/" id="nav-title">HPNY 2023</a>
    `;
    $("section").setAttribute("id", "home-section");
    $("section").innerHTML = `
      <div id="create-post-btn-wrap">
        <a href="/upload" id="create-post-btn">게시글 작성하기</a>
      </div>
      <ul id="post-list">${await updatePostList()}
      </ul>`;
  };

  const updatePostList = async () => {
    let template = "";
    const postList = await postListApi();
    postList.forEach(post => {
      const { postId, title, content, image } = post;
      template += `
      <li id="post">
        <a href="/${postId}">
          <img src="${image}">
          <div>
            <strong>${title}</strong>
            <p>${content}</p>
          </div>
        </a>
      </li>`;
    });
    return template;
  };
}
