import { Route } from "/src/js/router.js";
import handleUpload from "/src/js/handler/uploadHandler.js";
import handleDetailPost from "/src/js/handler/detailPostHandler.js";
import handleEdit from "/src/js/handler/editHandler.js";
import { $ } from "/src/js/utils/dom.js";

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
