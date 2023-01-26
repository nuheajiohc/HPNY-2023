import { $ } from "../utils/dom.js";
import { Route } from "../router.js";
import postDeleteApi from "../api/postDelete.js";
import commentDeleteApi from "../api/commentDelete.js";
import commentApi from "../api/comment.js";
import detailPostApi from "../api/detailPost.js";
import EditPost from "../pages/editPost.js";

export default async function handleDetailPost(e) {
  if (e.target.closest("a")) {
    window.history.pushState({}, "", e.target.closest("a").href);
    const route = new Route();
    route.loadPage();
    return;
  }

  if (e.target.id === "post-update-btn") {
    const { post } = await detailPostApi(window.location.pathname);
    window.history.pushState({}, "", window.location.pathname);
    const editPost = new EditPost();
    editPost.render(post.title, post.content, post.image);
  }

  if (e.target.id === "post-delete-btn") {
    await postDeleteApi(window.location.pathname);
    window.history.pushState({}, "", "/");
    const route = new Route();
    route.loadPage();
    return;
  }

  if (e.target.closest("li")) {
    await commentDeleteApi(e.target.closest("li").dataset.id);
    window.history.pushState({}, "", window.location.pathname);
    const route = new Route();
    route.loadPage();
    return;
  }

  if (e.target.id === "comment-posting") {
    await commentApi(window.location.pathname, $("#comment-input").value);
    const route = new Route();
    route.loadPage();
    return;
  }
}
