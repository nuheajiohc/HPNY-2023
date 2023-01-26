import { $ } from "./utils/dom.js";
import { Route } from "./router.js";
import handleUpload from "./handler/uploadHandler.js";
import handleDetailPost from "./handler/detailPostHandler.js";
import handleEdit from "./handler/editHandler.js";

function App() {
  const route = new Route();
  document.addEventListener("DOMContentLoaded", route.loadPage);

  document.addEventListener("click", e => {
    e.preventDefault();
    if (document.getElementById("home-section")) return route.routePage(e);
    if (document.getElementById("upload-section")) return handleUpload(e);
    if (document.getElementById("detail-section")) return handleDetailPost(e);
    if (document.getElementById("edit-section")) return handleEdit(e);
  });

  document.addEventListener("keyup", handleUpload);
  addEventListener("popstate", route.loadPage);
}

const app = new App();
