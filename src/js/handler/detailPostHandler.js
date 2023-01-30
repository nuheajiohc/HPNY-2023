import { $ } from "../utils/dom.js";
import { Route } from "../router.js";
import CommentApi from "../api/commentApi.js";
import EditPost from "../pages/editPost.js";
import PostApi from "../api/postApi.js";

export default async function handleDetailPost(e) {
  if (e.target.closest("a")) {
    window.history.pushState({}, "", e.target.closest("a").href);
    const route = new Route();
    route.loadPage();
    return;
  }

  if (e.target.id === "post-update-btn") {
    const postApi = new PostApi();
    const { post } = await postApi.getPost(window.location.pathname);
    window.history.pushState({}, "", window.location.pathname);
    const editPost = new EditPost();
    editPost.render(post.title, post.content, post.image);
  }

  if (e.target.id === "post-delete-btn") {
    const postApi = new PostApi();
    await postApi.deletePost(window.location.pathname);
    window.history.pushState({}, "", "/");
    const route = new Route();
    route.loadPage();
    return;
  }

  if (e.target.closest("li")) {
    const commentApi = new CommentApi();
    await commentApi.deleteComment(e.target.closest("li").dataset.id);
    window.history.pushState({}, "", window.location.pathname);
    const route = new Route();
    route.loadPage();
    return;
  }

  if (e.target.id === "comment-posting") {
    const commentApi = new CommentApi();
    await commentApi.addComment(
      window.location.pathname,
      $("#comment-input").value,
    );
    const route = new Route();
    route.loadPage();
    return;
  }
}
