const validate = {};
const messageEmpty = "You cannot empty ";
// show Error
const showError = (input, message) => {
  const parent = input.parentElement;
  const small = parent.querySelector("small");
  parent.classList.add("error");
  small.innerHTML = message;
};
function removeError(input) {
  const parent = input.parentElement;
  const small = parent.querySelector("small");
  parent.classList.remove("error");
  small.innerHTML = "";
}
const checkEmpty = (listInput = [], message = messageEmpty) => {
  let isEmpty = false;
  listInput.forEach((input) => {
    if (input.value.trim("") === "") {
      showError(input, message);
      isEmpty = false;
    } else {
      removeError(input);
      isEmpty = true;
    }
  });
  return isEmpty;
};
const checkBlur = (listInput = []) => {
  listInput.forEach((input) => {
    input.addEventListener("blur", (e) => {
      if (e.target.value === "") {
        showError(input, messageEmpty);
      } else {
        removeError(input);
      }
    });
  });
};
const checkChange = (listInput) => {
  listInput.forEach((input) => {
    input.addEventListener("keypress", (e) => {
      removeError(input);
    });
  });
};
const checkLength = (input, min, max) => {
  if (input.value.trim("").length < min || input.value.length >= max) {
    showError(
      input,
      "Must enter more than 6 characters and less than 20 characters"
    );
    return false;
  } else {
    removeError(input);
    return true;
  }
};
const checkEmail = (input) => {
  let isEmailError = false;
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!regexEmail.test(input.value.trim(""))) {
    showError(input, "Enter the correct email format");
    isEmailError = false;
  } else {
    removeError(input);
    isEmailError = true;
  }
  return isEmailError;
};
const checkPassword = (input) => {
  let isPassword = false;
  const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  if (regexPassword.test(input.value.trim(""))) {
    isPassword = true;
    removeError(input);
  } else {
    showError(
      input,
      `Password contains one special character, one uppercase letter,one number`
    );
    isPassword = false;
  }
  return isPassword;
};
const checkConfirmPassword = (inputPassword, inputConfirm) => {
  if (inputPassword.value.trim("") === inputConfirm.value.trim("")) {
    removeError(inputConfirm);
    return true;
  } else {
    showError(inputConfirm, "Password must match");
    return false;
  }
};
validate.checkEmpty = checkEmpty;
validate.checkChange = checkChange;
validate.checkLength = checkLength;
validate.checkEmail = checkEmail;
validate.checkBlur = checkBlur;
validate.checkPassword = checkPassword;
validate.checkConfirmPassword = checkConfirmPassword;
export default validate;
