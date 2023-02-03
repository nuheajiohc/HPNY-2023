import { $ } from "/src/js/utils/dom.js";
import PostApi from "/src/js/api/postApi.js";
import { Route } from "/src/js/router.js";

export default async function handleEdit(e) {
  const titleValue = $("#input-edit-title").value;
  const contentValue = $("#textarea-edit-content").value;
  const imgUrl = $("#img-add img").src;
  if (e.target.id === "edit-btn") {
    const postApi = new PostApi();
    await postApi.editPost(window.location.pathname.split("/").at(-1), titleValue, contentValue, imgUrl);
    window.history.pushState({}, "", `/post/${window.location.pathname.split("/").at(-1)}`);
    const route = new Route();
    route.loadPage();
    return;
  }
}
