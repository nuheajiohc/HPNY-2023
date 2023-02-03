import { $ } from "/src/js/utils/dom.js";
import { Route } from "/src/js/router.js";
import CommentApi from "/src/js/api/commentApi.js";
import PostApi from "/src/js/api/postApi.js";

export default async function handleDetailPost(e) {
  const route = new Route();

  if (e.target.id === "post-update-btn") {
    window.history.pushState(null, null, `/edit/${e.target.dataset.postId}`);
    route.loadPage();
  }

  if (e.target.id === "post-delete-btn") {
    const postApi = new PostApi();
    await postApi.deletePost(window.location.pathname);
    window.history.replaceState({}, "", "/");
    route.loadPage();
  }

  if (e.target.id === "comment-delete-btn") {
    const commentApi = new CommentApi();
    const commentId = e.target.closest("li").dataset.commentId;
    await commentApi.deleteComment(commentId);
    window.history.replaceState({}, "", window.location.pathname);
    route.loadPage();
  }

  if (e.target.id === "comment-posting") {
    const commentApi = new CommentApi();
    await commentApi.addComment(window.location.pathname, $("#comment-input").value);
    route.loadPage();
  }
}
