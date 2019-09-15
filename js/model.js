const imageDir = "/img/";
const data = {
  cats: [
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
  ],
  selectedCat: undefined
};

const model = {
  getCats: () => {
    return data.cats;
  },
  getSelectedCat: () => {
    return data.cats[data.selectedCat];
  },
  setSelectedCatId: id => {
    data.selectedCat = id;
  },
  incrementClickCount: id => {
    if (data.cats[id]) {
      ++data.cats[id].clicks;
    }
  },
  updateCatDetails: updateObj => {
    const selectedCat = data.cats[data.selectedCat];
    const { name, clicks, image } = updateObj;
    if (name) {
      selectedCat.name = name;
    }
    if (typeof clicks !== "undefined") {
      selectedCat.clicks = +clicks;
    }
    if (image) {
      selectedCat.image = image;
    }
    return selectedCat;
  }
};

export default model;
