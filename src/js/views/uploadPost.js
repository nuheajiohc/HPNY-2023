import { $ } from "../utils/dom.js";
import header from "./header.js";

export default class UploadPost {
  constructor() {
    document.title = "HPNY 2023 | upload post";
    header();
  }

  render() {
    $("section").setAttribute("id", "upload-section");
    $("section").innerHTML = `
      <div id="img-add-wrapper">랜덤 이미지 추가하기</div>
      <input placeholder="글 제목을 작성해주세요." id="input-title" maxlength="50">
      <textarea placeholder="글 내용을 작성해주세요." id="textarea-content" maxlength="500"></textarea>
      <button id="submit-btn" disabled="">글 작성하기</button>
    `;
  }
}
