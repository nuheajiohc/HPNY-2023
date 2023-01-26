import { Route } from "../router.js";
import { $ } from "../utils/dom.js";
import imageApi from "../api/Image.js";
import submitPostApi from "../api/submitPost.js";

let imageUrl;
export default async function handleUpload(e) {
  if (window.location.pathname !== "/upload") return;
  if (e.target.closest("a")) {
    window.history.pushState({}, "", e.target.closest("a").href);
    const route = new Route();
    route.loadPage();
    return;
  }

  if (e.target.id === "img-add-btn") {
    $("#img-add-btn").innerText = "이미지 추가 완료";
    $("#img-add-btn").disabled = true;
    imageUrl = await imageApi();
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
    $("#input-title").value &&
    $("#textarea-content").value &&
    $("#img-add-btn").disabled;
  $("#submit-btn").disabled = !isPossibleSubmit;
}
