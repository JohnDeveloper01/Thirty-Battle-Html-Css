let images = document.querySelectorAll(".image img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const close = document.querySelector(".btn-close");
const gallery = document.querySelector(".gallery");
const galleryInnerImg = document.querySelector(".gallery-inner img"); // return img
let indexItem = 0;
const displayItem = (index, item) => {
  if (indexItem === 0) {
    prev.classList.add("hide");
  } else {
    prev.classList.remove("hide");
  }
  if (indexItem === images.length - 1) {
    next.classList.add("hide");
  } else {
    next.classList.remove("hide");
  }
  galleryInnerImg.src = item.src;
  gallery.classList.add("show");
};
images.forEach((item, index) => {
  item.addEventListener("click", () => {
    indexItem = index;
    displayItem(index, item);
  });
});
close.addEventListener("click", () => {
  gallery.classList.remove("show");
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    gallery.classList.remove("show");
  }
});
next.addEventListener("click", () => {
  indexItem = indexItem + 1;
  displayItem(indexItem, images[indexItem]);
});
prev.addEventListener("click", () => {
  indexItem = indexItem - 1;
  displayItem(indexItem, images[indexItem]);
});
