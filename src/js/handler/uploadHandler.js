import { Route } from "/src/js/router.js";
import { $ } from "/src/js/utils/dom.js";
import imageApi from "/src/js/api/imageApi.js";
import PostApi from "/src/js/api/postApi.js";

let imageUrl;
let clickedImageAdd = false;
export default async function handleUpload(e) {
  if (e.target.id === "img-add" && !clickedImageAdd) {
    imageUrl = await imageApi();
    $("#img-add").innerHTML = `<img src=${imageUrl}>`;
    clickedImageAdd = true;
  }

  if (e.target.id === "submit-btn") {
    const postApi = new PostApi();
    await postApi.addPost($("#input-title").value, $("#textarea-content").value, imageUrl);
    window.history.pushState({}, "", "/");
    const route = new Route();
    route.loadPage();
    clickedImageAdd = false;
    return;
  }

  const isPossibleSubmit = $("#input-title").value && $("#textarea-content").value && clickedImageAdd;
  $("#submit-btn").disabled = !isPossibleSubmit;
}
