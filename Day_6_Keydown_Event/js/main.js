const eKey = document.querySelector(".card.key p:last-child");
const eWhich = document.querySelector(".card.which p:last-child");
const eCode = document.querySelector(".card.code p:last-child");
const eLocation = document.querySelector(".card.location p:last-child");
const btnAlert = document.querySelector(".alert");
const box = document.querySelector(".box");
const result = document.querySelector(".result");
document.addEventListener("keydown", (e) => {
  result.innerText = e.code;
  eKey.innerText = e.key;
  eLocation.innerText = e.location;
  eWhich.innerText = e.which;
  eCode.innerText = e.code;
  btnAlert.classList.add("hide");
  box.classList.remove("hide");
});
