import model from "./model.js";
import catListView from "./catListView.js";
import catDisplayView from "./catDisplayView.js";
import adminView from "./adminView.js";

const controller = {
  init: () => {
    catDisplayView.init();
    adminView.init();
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
  },
  updateCatDetails: obj => {
    const updatedCat = model.updateCatDetails(obj);
    catListView.reRenderItem(updatedCat);
    catDisplayView.render(updatedCat);
    catDisplayView.renderCount(updatedCat.clicks);
  },
  getSelectedCat: () => {
    return model.getSelectedCat();
  }
};

export default controller;
