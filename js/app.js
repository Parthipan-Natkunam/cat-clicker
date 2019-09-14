import controller from "./controller.js";

const initApp = () => {
  controller.init();
};

window.addEventListener("load", initApp);
