import model from "./model.js";
import catListView from "./catListView.js";
import catDisplayView from "./catDisplayView.js";

const controller = {
  init: () => {
    catDisplayView.init();
    const cats = model.getCats();
    catListView.render(cats);
  },
  incrementClickCount: () => {
    const selected = model.getSelectedCat();
    if (selected) {
      model.incrementClickCount(selected.id);
      catDisplayView.renderCount(selected.clicks);
    }
  },
  setSelectedCatID: id => {
    model.setSelectedCatId(id);
    const selectedCat = model.getSelectedCat();
    catDisplayView.render(selectedCat);
    catDisplayView.renderCount(selectedCat.clicks);
  }
};

export default controller;
