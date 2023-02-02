import { $ } from "../utils/dom.js";

export default function header() {
  $("#nav").innerHTML = `
        <a href="/" id="backIcon-wrapper">
          <img data-href="/" src="../src/images/left-arrow.png" />
        </a>
        <a href="/" data-href="/" id="nav-title">HPNY 2023</a>
    `;
}
