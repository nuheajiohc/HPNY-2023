import { $ } from "../utils/dom.js";

export default function UploadPost() {
  document.title = "HPNY 2023 | upload post";
  this.render = () => {
    $("#nav").innerHTML = `
    <a href="/" id="backIcon-wrapper">
      <img src="../src/images/left-arrow.png" />
    </a>
    <a href="/" id="nav-title">HPNY 2023</a>
`;
    $("section").setAttribute("id", "upload-section");
    $("section").innerHTML = `
      <div id="img-add-wrapper">랜덤 이미지 추가하기</div>
      <input placeholder="글 제목을 작성해주세요." id="input-title" maxlength="50">
      <textarea placeholder="글 내용을 작성해주세요." id="textarea-content" maxlength="500"></textarea>
      <button id="submit-btn" disabled="">글 작성하기</button>
    `;
  };
}
