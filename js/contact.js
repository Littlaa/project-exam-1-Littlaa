const contactForm = document.querySelector("#contactForm");
const fullName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const address = document.querySelector("#message");
const addressError = document.querySelector("#messageError");

function formValidation(event) {
  event.preventDefault();

  if (minLength(fullName.value, 5)) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (emailValidation(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (minLength(subject.value, 15)) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (minLength(message.value, 25)) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
}

contactForm.addEventListener("submit", formValidation);

function minLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function emailValidation(email) {
  const regEx = /\S+@\S+\.\S+/;
  const emailMatch = regEx.test(email);
  return emailMatch;
}
