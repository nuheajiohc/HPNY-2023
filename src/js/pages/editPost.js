import { $ } from "../utils/dom.js";

export default class EditPost {
  constructor() {
    document.title = "HPNY 2023 | edit post";
  }

  render(title, content, imgUrl) {
    $("#nav").innerHTML = `
    <a href="/" id="backIcon-wrapper">
      <img src="../src/images/left-arrow.png" />
    </a>
    <a href="/" id="nav-title">HPNY 2023</a>
`;
    $("section").setAttribute("id", "edit-section");
    $("section").innerHTML = `
      <div id="img-wrapper"><img src=${imgUrl}/></div>
      <input placeholder="글 제목을 작성해주세요." id="input-edit-title" maxlength="50" value=${title}>
      <textarea placeholder="글 내용을 작성해주세요." id="textarea-edit-content" maxlength="500">${content}</textarea>
      <button id="edit-btn">글 수정하기</button>
    `;
  }
}
