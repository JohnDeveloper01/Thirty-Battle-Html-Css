const btnOpen = document.querySelector("#open-modal-btn");
const modal = document.querySelector(".modal");
const btnClose = document.querySelector(".modal-btn-close");
const btnCloseIcons = document.querySelector(".modal-btn-close-icons");
const modalInner = document.querySelector(".modal-inner");
const toggleModal = () => {
  modal.classList.toggle("hide");
};
btnOpen.addEventListener("click", toggleModal);
btnClose.addEventListener("click", toggleModal);
btnCloseIcons.addEventListener("click", toggleModal);
modal.addEventListener("click", function (e) {
  if (modalInner.contains(e.target)) {
    return;
  }
});
