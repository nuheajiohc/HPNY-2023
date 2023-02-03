import { $ } from "/src/js/utils/dom.js";

export default function PageNotFound() {
  $("body").innerHTML = `
  <div>
  잘못된 페이지를 입력하셨습니다.
  </div>
  `;
}
