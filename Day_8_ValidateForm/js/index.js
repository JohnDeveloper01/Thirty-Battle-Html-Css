import validate from "./validateForm.js";

const $ = document.querySelector.bind(document);
const form = document.querySelector(".form-control");
const listInput = document.querySelectorAll(".form-input");
const userName = $("#form-user");
const email = $("#form-email");
const password = $("#form-password");
const confirmPassword = $("#form-confirm-password");

validate.checkBlur(listInput);
validate.checkChange(listInput);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const isEmpty = validate.checkEmpty(listInput);

  if (isEmpty) {
    const isEmail = validate.checkEmail(email);
    const isLength = validate.checkLength(userName, 6, 20);
    const isPassword = validate.checkPassword(password);
    const isConfirm = validate.checkConfirmPassword(password, confirmPassword);
  }
});
