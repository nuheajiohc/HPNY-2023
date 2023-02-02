import { $ } from "../utils/dom.js";
import PostApi from "../api/postApi.js";
import header from "./header.js";

export default class Home {
  constructor() {
    document.title = "HPNY 2023";
    header();
    $("#backIcon-wrapper").className = "hidden";
  }

  async getPostList() {
    const postApi = new PostApi();
    const postList = await postApi.getPostList();
    return postList.reduce((template, post) => {
      const { postId, title, content, image } = post;
      template =
        `
      <li id="post">
        <a href="post/${postId}">
          <img src="${image}">
          <div>
            <strong>${title}</strong>
            <p>${content}</p>
          </div>
        </a>
      </li>
      ` + template;
      return template;
    }, "");
  }

  async render() {
    $("section").setAttribute("id", "home-section");
    $("section").innerHTML = `
      <div id="create-post-btn-wrap">
        <a href="/upload" id="create-post-btn">게시글 작성하기</a>
      </div>
      <ul id="post-list"></ul>`;
    $("#post-list").innerHTML = await this.getPostList();
  }
}
