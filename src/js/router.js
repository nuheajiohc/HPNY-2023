import Home from "./pages/home.js";
import UploadPost from "./pages/uploadPost.js";
import DetailPost from "./pages/detailPost.js";

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
    // 404: () => {},
  };

  this.loadPage = async () => {
    let location = window.location.pathname;
    // PageMap[location]() || PageMap[404]();
    if (/\/[0-9]+$/.test(location)) {
      const detailPost = new DetailPost(location);
      await detailPost.render(location);
      return;
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
