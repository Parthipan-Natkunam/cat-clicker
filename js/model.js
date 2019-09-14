const imageDir = "/img/";
const cats = {
  data: [
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
    return cats.data;
  },
  getSelectedCat: () => {
    return cats.data[cats.selectedCat];
  },
  setSelectedCatId: id => {
    cats.selectedCat = id;
  },
  incrementClickCount: id => {
    if (cats.data[id]) {
      ++cats.data[id].clicks;
    }
  }
};

export default model;
