import model from "./model.js";
import catListView from "./catListView.js";

const controller = {
  init: () => {
    const cats = model.getCats();
    catListView.render(cats);
  },
  setSelectedCatID: id => {
    model.setSelectedCatId(id);
  }
};

export default controller;
