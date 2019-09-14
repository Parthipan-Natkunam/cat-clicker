import controller from "./controller.js";

const catListDOM = document.getElementById("catList");

const __loadCatList = cats => {
  const listMarkup = cats.map(cat => {
    return `<li class="cat-list__item" data-id="${cat.id}">
          <img src="${cat.image}" class="cat-list__thumbnail" alt="cat thumbnail" />
          <span class="cat-list__name">
            <b>${cat.name}</b>
          </span>
        </li>`;
  });
  catListDOM.innerHTML = listMarkup.join("");
};

const __getCatIdFromDOM = (target, tagName) => {
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

const __attachClickListenerOnList = () => {
  catListDOM.addEventListener("click", ev => {
    const target = ev.target;
    const nodeType = target.tagName;
    if (nodeType === "UL") {
      return;
    }
    const selectedCatId = __getCatIdFromDOM(target, nodeType);
    controller.setSelectedCatID(selectedCatId);
  });
};

const catListView = {
  render: cats => {
    catListDOM.innerHTML = "";
    __loadCatList(cats);
    __attachClickListenerOnList();
  }
};

export default catListView;
