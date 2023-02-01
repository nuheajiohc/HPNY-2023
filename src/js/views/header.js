import { $ } from "../utils/dom.js";

export default function header() {
  $("#nav").innerHTML = `
        <a href="/" id="backIcon-wrapper">
          <img src="../src/images/left-arrow.png" />
        </a>
        <a href="/" id="nav-title">HPNY 2023</a>
    `;
}
