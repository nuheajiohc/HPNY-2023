import Home from "/src/js/views/home.js";
import UploadPost from "/src/js/views/uploadPost.js";
import DetailPost from "/src/js/views/detailPost.js";
import PageNotFound from "/src/js/views/404.js";
import EditPost from "/src/js/views/editPost.js";
import PostApi from "/src/js/api/postApi.js";

export function Route() {
  this.loadPage = async () => {
    let location = window.location.pathname;
    if (/\/post\/[0-9]+$/.test(location)) {
      const detailPost = new DetailPost(location);
      await detailPost.render(location);
    } else if (/\/edit\/[0-9]+$/.test(location)) {
      const postApi = new PostApi();
      const { post } = await postApi.getPost("/post/" + location.split("/").at(-1));
      const editPost = new EditPost();
      editPost.render(post.title, post.content, post.image);
    } else if (location === "/") {
      const home = new Home();
      home.render();
    } else if (location === "/upload") {
      const uploadPost = new UploadPost();
      uploadPost.render();
    } else {
      PageNotFound();
    }
  };

  this.routePage = e => {
    const renderButton = e.target.closest("a");
    if (!renderButton) return;
    window.history.pushState({}, "", renderButton.href);
    this.loadPage();
  };
}
