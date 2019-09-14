import controller from "./controller.js";

const catAreaDOM = document.getElementById("catDisplayArea");
const catNameDOM = document.getElementById("catName");
const countDOM = document.getElementById("clickCount");

const __incrementClickCount = () => {
  controller.incrementClickCount();
};

const __attachClickListenerOnPic = () => {
  catAreaDOM.addEventListener("click", __incrementClickCount);
};

const catDispalyView = {
  init: () => {
    __attachClickListenerOnPic();
  },
  render: cat => {
    catAreaDOM.style.background = `url("${cat.image}") left top/cover no-repeat`;
    catNameDOM.innerText = cat.name;
  },
  renderCount: count => {
    countDOM.innerText = count;
  }
};

export default catDispalyView;
