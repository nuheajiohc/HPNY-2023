import { $ } from "/src/js/utils/dom.js";
import header from "/src/js/views/header.js";

export default class EditPost {
  constructor() {
    document.title = "HPNY 2023 | edit post";
    header();
  }

  render(title, content, imgUrl) {
    $("section").setAttribute("id", "edit-section");
    $("section").innerHTML = `
      <div id="img-add"><img src=${imgUrl}/></div>
      <input placeholder="글 제목을 작성해주세요." id="input-edit-title" maxlength="50" value="${title}">
      <textarea placeholder="글 내용을 작성해주세요." id="textarea-edit-content" maxlength="500">${content}</textarea>
      <button id="edit-btn">글 수정하기</button>
    `;
  }
}
