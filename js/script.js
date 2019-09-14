const imageDir = "/img/";
const catsArray = [
  {
    id: 0,
    name: "Phoebie",
    clicks: 0,
    image: `${imageDir}1.jpg`
  },
  {
    id: 1,
    name: "Chewie",
    clicks: 0,
    image: `${imageDir}2.jpg`
  },
  {
    id: 2,
    name: "Garfield",
    clicks: 0,
    image: `${imageDir}3.jpg`
  },
  {
    id: 3,
    name: "Slade",
    clicks: 0,
    image: `${imageDir}4.jpg`
  },
  {
    id: 4,
    name: "Marvel",
    clicks: 0,
    image: `${imageDir}5.jpg`
  }
];
const catListDOM = document.getElementById("catList");
let selectedCatId;

const loadCatList = () => {
  const listMarkup = catsArray.map(cat => {
    return `<li class="cat-list__item" data-id="${cat.id}">
        <img src="${cat.image}" class="cat-list__thumbnail" alt="cat thumbnail" />
        <span class="cat-list__name">
          <b>${cat.name}</b>
        </span>
      </li>`;
  });
  catListDOM.innerHTML = listMarkup.join("");
};

const getCatIdFromDOM = (target, tagName) => {
  let catId;
  if (tagName === "LI") {
    catId = target.dataset.id;
  } else {
    const listNode = target.closest("li");
    if (listNode) {
      catId = listNode.dataset.id;
    }
  }
  return catId;
};

const setCountDisplay = count => {
  const countDOM = document.getElementById("clickCount");
  countDOM.innerText = count;
};

const setCatDetails = selectedId => {
  const catAreaDOM = document.getElementById("catDisplayArea");
  const catNameDOM = document.getElementById("catName");
  const selectedCat = catsArray[selectedId];
  catAreaDOM.style.background = `url("${selectedCat.image}") left top/cover no-repeat`;
  catNameDOM.innerText = selectedCat.name;
  setCountDisplay(selectedCat.clicks);
};

const attachClickListenerOnList = () => {
  catListDOM.addEventListener("click", ev => {
    const target = ev.target;
    const nodeType = target.tagName;
    if (nodeType === "UL") {
      return;
    }
    selectedCatId = getCatIdFromDOM(target, nodeType);
    setCatDetails(selectedCatId);
  });
};

const incrementClickCount = () => {
  if (selectedCatId) {
    ++catsArray[selectedCatId].clicks;
    setCountDisplay(catsArray[selectedCatId].clicks);
  }
};

const attachClickListenerOnPic = () => {
  const catPicDOM = document.getElementById("catDisplayArea");
  catPicDOM.addEventListener("click", incrementClickCount);
};

const initCatApp = () => {
  loadCatList();
  attachClickListenerOnList();
  attachClickListenerOnPic();
};

window.addEventListener("load", initCatApp);
