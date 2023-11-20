//responsive-navbar
const homeburggerBtn = document.getElementById("homeburgger_btn");
const responsiveNavMenu = document.getElementById("nav_menu");
const navCloseBtn = document.getElementById("nav_close");

homeburggerBtn.addEventListener("click", () => {
  responsiveNavMenu.classList.remove("d-none");
  homeburggerBtn.classList.add("d-none");
});
navCloseBtn.addEventListener("click", () => {
  responsiveNavMenu.classList.add("d-none");
  homeburggerBtn.classList.remove("d-none");
});

//change navbarcolor when scroll
window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").classList.add("bg-white");
  } else {
    document.getElementById("navbar").classList.remove("bg-white");
  }
  // scroll effect for card
  if (document.documentElement.scrollTop > 390) {
    document.getElementById("card").classList.add("slideUp");
  } else {
    document.getElementById("card").classList.remove("slideUp");
  }
};

//validation

const firstName = document.getElementById("f-name");
const LastName = document.getElementById("l-name");
const Email = document.getElementById("email");
const AddressOne = document.getElementById("addres-one");
const AddressTwo = document.getElementById("addres-two");
const city = document.getElementById("city");
const post = document.getElementById("post");
const zipCode = document.getElementById("zip-code");
const cardName = document.getElementById("card-name");
const cardNumber = document.getElementById("card-num");
const cvc = document.getElementById("cvc");
const form = document.getElementById("form");
// validte form
function validate() {
  validateFirstName();
  validateLastName();
  validateEmail();
  validateAddressOne();
  validateAddressTwo();
  validateCity();
  validatePost();
  validateZipCode();
  validateCardNumber();
  validateCardName();
  validateCvc();
  if (
    validateFirstName() &&
    validateLastName() &&
    validateEmail() &&
    validateAddressOne() &&
    validateAddressTwo() &&
    validateCity() &&
    validatePost() &&
    validateZipCode() &&
    validateCardNumber() &&
    validateCardName() &&
    validateCvc()
  ) {
    document.getElementById("form").submit();
  } else {
    return false;
  }
}
//  validateFirstName
function validateFirstName() {
  if (firstName.value == "") {
    document.getElementById("f-name-error").classList.remove("d-none");
    return false;
  } else {
    document.getElementById("f-name-error").classList.add("d-none");
    return true;
  }
}

//  validateLastName
function validateLastName() {
  if (LastName.value == "") {
    document.getElementById("l-name-error").classList.remove("d-none");
    return false;
  } else {
    document.getElementById("l-name-error").classList.add("d-none");
    return true;
  }
}
// validateEmail
function validateEmail() {
  if (Email.value == "") {
    document.getElementById("email-error").classList.remove("d-none");
    return false;
  } else {
    document.getElementById("email-error").classList.add("d-none");
    return true;
  }
}
// validateAddressOne
function validateAddressOne() {
  if (AddressOne.value == "") {
    document.getElementById("addrs-error-one").classList.remove("d-none");
    return false;
  } else {
    document.getElementById("addrs-error-one").classList.add("d-none");
    return true;
  }
}
// validateAddressTwo
function validateAddressTwo() {
  if (AddressTwo.value == "") {
    document.getElementById("addrs-error-two").classList.remove("d-none");
    return false;
  } else {
    document.getElementById("addrs-error-two").classList.add("d-none");
    return true;
  }
}
// validateCity
function validateCity() {
  if (city.value == "") {
    document.getElementById("city-error").classList.remove("d-none");
    return false;
  } else {
    document.getElementById("city-error").classList.add("d-none");
    return true;
  }
}
// validatePost
function validatePost() {
  if (post.value == "") {
    document.getElementById("post-error").classList.remove("d-none");
    return false;
  } else {
    document.getElementById("post-error").classList.add("d-none");
    return true;
  }
}
// validateZipCode
function validateZipCode() {
  if (zipCode.value == "") {
    document.getElementById("zip-code-error").classList.remove("d-none");
    return false;
  } else {
    document.getElementById("zip-code-error").classList.add("d-none");
    return true;
  }
}
// validateCardName
function validateCardName() {
  if (cardName.value == "") {
    document.getElementById("card-name-error").classList.remove("d-none");
    return false;
  } else {
    document.getElementById("card-name-error").classList.add("d-none");
    return true;
  }
}
// validateCardNumber
function validateCardNumber() {
  if (cardNumber.value == "") {
    document.getElementById("card-num-error").classList.remove("d-none");
    return false;
  } else {
    document.getElementById("card-num-error").classList.add("d-none");
    return true;
  }
}
// validateCvc
function validateCvc() {
  if (cvc.value == "") {
    document.getElementById("cvc-error").classList.remove("d-none");
    return false;
  } else {
    document.getElementById("cvc-error").classList.add("d-none");
    return true;
  }
}
