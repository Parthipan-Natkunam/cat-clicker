const cats = [
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

const model = {
  getCats: () => {
    return cats;
  },
  incrementClickCount: id => {
    if (cats[id]) {
      ++cats[id].clicks;
    }
  }
};

export default model;
