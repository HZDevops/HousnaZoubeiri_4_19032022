// DOM form elements
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const allLocations = document.getElementById('locations');
const reserveForm = document.getElementById('reserve');
const errorTest = document.getElementById('error');

// Regex expression
const regexName = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;

// Check firstname field form
function checkFirstName() {
  if (
    firstName.value.trim().length < 2 ||
    first.value.trim() === '' ||
    !firstName.value.match(regexName)
  ) {
    firstName.parentElement.setAttribute('data-error-visible', 'true');
    firstName.style.border = '2px solid #e54858';
    return false;
  } else {
    first.parentElement.setAttribute('data-error-visible', 'false');
    first.style.border = 'solid #279e7a 0.19rem';
    return true;
  }
}

// Check lastname field form
function checkLastName() {
  if (
    lastName.value.trim().length < 2 ||
    last.value.trim() === '' ||
    !lastName.value.match(regexName)
  ) {
    lastName.parentElement.setAttribute('data-error-visible', 'true');
    lastName.style.border = '2px solid #e54858';
    return false;
  } else {
    last.parentElement.setAttribute('data-error-visible', 'false');
    last.style.border = 'solid #279e7a 0.19rem';
    return true;
  }
}

// Check email field form
function checkEmail() {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (email.value.trim().match(regexEmail)) {
        email.parentElement.setAttribute('data-error-visible', 'false');
        email.style.border = 'solid #279e7a 0.19rem';
        return true;
    } else {
        email.parentElement.setAttribute('data-error-visible', 'true');
        email.style.border = '2px solid #e54858';
        return false;
    }
}

// Check birth date field form
function checkBirthDate() {
    if (birthdate.value.trim().length !== 10) {
        birthdate.parentElement.setAttribute('data-error-visible', 'true');
        birthdate.style.border = '2px solid #e54858';
        return false;
    }
    birthdate.parentElement.setAttribute('data-error-visible', 'false');
    birthdate.style.border = 'solid #279e7a 0.19rem';
    return true;
}

// Check tournament quantity field form
function checkTournamentsQuantity() {
    if (quantity.value.trim().length === 0 || isNaN(quantity.value.trim()) === true || quantity.value.trim() < 0) {
        quantity.parentElement.setAttribute('data-error-visible', 'true');
        quantity.style.border = '2px solid #e54858';
        return false;
    }
    quantity.parentElement.setAttribute('data-error-visible', 'false');
    quantity.style.border = 'solid #279e7a 0.19rem';
    return true;
}

// Call check field function in each event in the input
function EventHandlerFieldForm(element, method, event) {
  element.addEventListener(event, method);
}
EventHandlerFieldForm(firstName, checkFirstName, 'focusout');
EventHandlerFieldForm(lastName, checkLastName, 'focusout');
EventHandlerFieldForm(email, checkEmail, 'focusout');
EventHandlerFieldForm(birthdate, checkBirthDate, 'focusout');
EventHandlerFieldForm(quantity, checkTournamentsQuantity, 'focusout');

// Check all fields validation
function checkFieldsValidation() {
    checkFirstName();
    checkLastName();
    checkEmail();
    checkBirthDate ();
    checkTournamentsQuantity();
}

// Check form validation
function checkFormValidation() {
  if (
    checkFirstName() === true &&
    checkLastName() === true &&
    checkEmail() === true &&
    checkBirthDate() === true &&
    checkTournamentsQuantity() === true
  ) {
    return true;
  } else {
    return false;
  }
}

//Validate form when submitted
function validateForm() {
reserveForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (checkFormValidation() === true) {
      displayModalConfirmation();
      reserveForm.reset();
    } else {
      checkFieldsValidation();
    }
});
}
validateForm();

