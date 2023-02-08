import { Route } from "/src/js/router.js";
import { $ } from "/src/js/utils/dom.js";
import imageApi from "/src/js/api/imageApi.js";
import PostApi from "/src/js/api/postApi.js";

let imageUrl;
export default async function handleUpload(e) {
  if (
    e.target.id === "img-add" &&
    $("#img-add").innerHTML === "랜덤 이미지 추가하기"
  ) {
    imageUrl = await imageApi();
    $("#img-add").innerHTML = `<img src=${imageUrl}>`;
  }

  if (e.target.id === "submit-btn") {
    const postApi = new PostApi();
    await postApi.addPost(
      $("#input-title").value,
      $("#textarea-content").value,
      imageUrl,
    );
    window.history.pushState({}, "", "/");
    const route = new Route();
    route.loadPage();
    return;
  }

  const isPossibleSubmit =
    $("#input-title").value &&
    $("#textarea-content").value &&
    $("#img-add").innerHTML !== "랜덤 이미지 추가하기";
  $("#submit-btn").disabled = !isPossibleSubmit;
}
