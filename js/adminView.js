import controller from "./controller.js";

const cancelBtn = document.getElementById("cancel");
const adminForm = document.getElementById("admin-form");
const adminConsole = document.getElementById("adminConsole");
const adminBtn = document.getElementById("admin-btn");
const nameInput = document.getElementById("catNameField");
const imgInput = document.getElementById("catImageField");
const clickInput = document.getElementById("catClicksField");

const __hideAdminConsole = () => {
  adminConsole.style.display = "none";
};

const __setInputValues = () => {
  const cat = controller.getSelectedCat();
  if (cat) {
    nameInput.value = cat.name;
    imgInput.value = cat.image;
    clickInput.value = cat.clicks;
  }
  return cat;
};

const __attachListeners = () => {
  cancelBtn.addEventListener("click", __hideAdminConsole);
  adminBtn.addEventListener("click", () => {
    const setCat = __setInputValues();
    if (setCat) {
      adminConsole.style.display = "block";
    }
  });
  adminForm.addEventListener("submit", ev => {
    const formEntries = Object.fromEntries(
      new FormData(ev.currentTarget).entries()
    );
    controller.updateCatDetails(formEntries);
    __hideAdminConsole();
    ev.preventDefault();
  });
};

const adminView = {
  init: () => {
    __attachListeners();
  }
};

export default adminView;
