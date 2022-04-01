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

// Check firstname validity input
function checkFirstName() {
  if (
    firstName.value.trim().length < 2 ||
    firstName.value.trim() === '' ||
    !firstName.value.match(regexName)
  ) {
    firstName.parentElement.setAttribute('data-error-visible', 'true');
    firstName.style.border = '2px solid #FF4E60';
    return false;
  }
  firstName.parentElement.setAttribute('data-error-visible', 'false');
  firstName.style.border = 'none';
  return true;
}

// Check lastname validity input
function checkLastName() {
  if (
    lastName.value.trim().length < 2 ||
    lastName.value.trim() === '' ||
    !lastName.value.match(regexName)
  ) {
    lastName.parentElement.setAttribute('data-error-visible', 'true');
    lastName.style.border = '2px solid #FF4E60';
    return false;
  }
  lastName.parentElement.setAttribute('data-error-visible', 'false');
  lastName.style.border = 'none';
  return true;
}

// Check email validity input
function checkEmail() {
  const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
  if (email.value.trim().match(regexEmail)) {
    email.parentElement.setAttribute('data-error-visible', 'false');
    email.style.border = 'none';
    return true;
  }
  email.parentElement.setAttribute('data-error-visible', 'true');
  email.style.border = '2px solid #FF4E60';
  return false;
}

// Check birth date validity input
function checkBirthDate() {
  if (birthdate.value.trim().length !== 10) {
    birthdate.parentElement.setAttribute('data-error-visible', 'true');
    birthdate.style.border = '2px solid #FF4E60';
    return false;
    }
  birthdate.parentElement.setAttribute('data-error-visible', 'false');
  birthdate.style.border = 'none';
  return true;
}

// Check tournament quantity validity input
function checkTournamentQuantity() {
  if (quantity.value.trim().length === 0 || isNaN(quantity.value.trim()) === true || quantity.value.trim() < 0) {
    quantity.parentElement.setAttribute('data-error-visible', 'true');
    quantity.style.border = '2px solid #FF4E60';
    return false;
    }
  quantity.parentElement.setAttribute('data-error-visible', 'false');
  quantity.style.border = 'none';
  return true;
}

/**
 * Call validity check field function in each focusout event of the field
 * @param {HTMLElement} element
 * @param {Boolean} method
 * @param {Event} event
 **/
function checkFieldValidity(element, method, event) {
  element.addEventListener(event, method);
}
checkFieldValidity(firstName, checkFirstName, 'focusout');
checkFieldValidity(lastName, checkLastName, 'focusout');
checkFieldValidity(email, checkEmail, 'focusout');
checkFieldValidity(birthdate, checkBirthDate, 'focusout');
checkFieldValidity(quantity, checkTournamentQuantity, 'focusout');

//Check all inputs form validity
function checkAllFieldsValidity() {
    checkFirstName();
    checkLastName();
    checkEmail();
    checkBirthDate ();
    checkTournamentQuantity();
}

/**
 * Check validity form
 * @returns {Boolean}
 */
function checkFormValidity() {
  if (
    checkFirstName() === true &&
    checkLastName() === true &&
    checkEmail() === true &&
    checkBirthDate() === true &&
    checkTournamentQuantity() === true
  ) {
    return true;
  } else {
    return false;
  }
}

//Submit form by checking validity and display a pop-up when it's well done
function submitForm() {
reserveForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (checkFormValidity() === true) {
      displayModalConfirmation();
      reserveForm.reset();
    } else {
      checkAllFieldsValidity();
    }
});
}
submitForm();

