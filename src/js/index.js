import { Route } from "./router.js";
import handleUpload from "./handler/uploadHandler.js";
import handleDetailPost from "./handler/detailPostHandler.js";
import handleEdit from "./handler/editHandler.js";
import { $ } from "./utils/dom.js";

function App() {
  const route = new Route();
  document.addEventListener("DOMContentLoaded", route.loadPage);

  document.addEventListener("click", e => {
    e.preventDefault();
    if (e.target.dataset.href === "/") return route.routePage(e);
    if (window.location.pathname === "/") return route.routePage(e);
    if (window.location.pathname === "/upload") return handleUpload(e);
    if (window.location.pathname.includes("post")) return handleDetailPost(e);
    if (window.location.pathname.includes("edit")) return handleEdit(e);
  });

  document.addEventListener("keyup", e => {
    if (e.target === $("#input-title") || e.target === $("#textarea-content")) {
      handleUpload(e);
    }
  });

  addEventListener("popstate", route.loadPage);
}

const app = new App();
