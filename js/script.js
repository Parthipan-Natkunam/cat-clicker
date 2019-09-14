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

const loadCatList = () => {
  const catListDOM = document.getElementById("catList");
  const listMarkup = catsArray.map(cat => {
    return `<li class="cat-list__item">
        <img src="${cat.image}" class="cat-list__thumbnail" alt="cat thumbnail" />
        <span class="cat-list__name">
          <b>${cat.name}</b>
        </span>
      </li>`;
  });
  catListDOM.innerHTML = listMarkup.join("");
};

const initCatApp = () => {
  loadCatList();
};

window.addEventListener("load", initCatApp);
