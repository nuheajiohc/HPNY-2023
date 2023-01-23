import { $ } from "./utils/dom.js";
import { RoutePage } from "./router.js";

function App() {
  this.init = () => {
    $("nav").innerHTML = `
      <a href="/" id="backIcon-wrapper" class="hidden">
        <img src="../src/images/left-arrow.png" />
      </a>
      <a href="/" id="nav-title">HPNY 2023</a>`;
  };
  RoutePage();
}

const app = new App();
app.init();
