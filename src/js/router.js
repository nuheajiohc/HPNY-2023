import Home from "./pages/home.js";
import UploadPost from "./pages/uploadPost.js";
import DetailPost from "./pages/detailPost.js";
import PageNotFound from "./pages/404.js";

export function Route() {
  this.PageMap = {
    "/": () => {
      const home = new Home();
      home.render();
    },
    "/upload": () => {
      const uploadPost = new UploadPost();
      uploadPost.render();
    },
    404: PageNotFound,
  };

  this.loadPage = async () => {
    let location = window.location.pathname;
    if (/\/[0-9]+$/.test(location)) {
      const detailPost = new DetailPost(location);
      await detailPost.render(location);
      return;
    }
    if (!this.PageMap[location]) {
      this.PageMap[404]();
    }
    this.PageMap[location]();
  };

  this.routePage = e => {
    const renderButton = e.target.closest("a");
    if (!renderButton) return;
    window.history.pushState({}, "", renderButton.href);
    this.loadPage();
  };
}
