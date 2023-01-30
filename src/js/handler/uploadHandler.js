import { Route } from "../router.js";
import { $ } from "../utils/dom.js";
import imageApi from "../api/Image.js";
import submitPostApi from "../api/submitPost.js";

let imageUrl;
let clickedImageAdd = false;
export default async function handleUpload(e) {
  if (window.location.pathname !== "/upload") return;
  if (e.target.closest("a")) {
    window.history.pushState({}, "", e.target.closest("a").href);
    const route = new Route();
    route.loadPage();
    return;
  }

  if (e.target.id === "img-add-wrapper") {
    imageUrl = await imageApi();
    $("#img-add-wrapper").innerHTML = `<img src=${imageUrl}>`;
    clickedImageAdd = true;
  }

  if (e.target.id === "submit-btn") {
    await submitPostApi(
      $("#input-title").value,
      $("#textarea-content").value,
      imageUrl,
    );
    window.history.pushState({}, "", "/");
    const route = new Route();
    route.loadPage();
  }

  const isPossibleSubmit =
    $("#input-title").value && $("#textarea-content").value && clickedImageAdd;

  $("#submit-btn").disabled = !isPossibleSubmit;
}
