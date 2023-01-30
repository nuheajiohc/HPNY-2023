import { $ } from "../utils/dom.js";
import PostApi from "../api/postApi.js";
import { Route } from "../router.js";

export default async function handleEdit(e) {
  if (e.target.closest("a")) {
    window.history.pushState({}, "", e.target.closest("a").href);
    const route = new Route();
    route.loadPage();
    return;
  }
  const titleValue = $("#input-edit-title").value;
  const contentValue = $("#textarea-edit-content").value;
  const imgUrl = $("#img-wrapper img").src;
  if (e.target.id === "edit-btn") {
    const postApi = new PostApi();
    await postApi.editPost(
      window.location.pathname,
      titleValue,
      contentValue,
      imgUrl,
    );
    window.history.pushState({}, "", window.location.pathname);
    const route = new Route();
    route.loadPage();
    return;
  }
}
