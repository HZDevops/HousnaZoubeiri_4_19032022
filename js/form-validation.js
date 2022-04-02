// DOM form elements
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const allLocations = document.getElementById('locations');
const locationRadioButton = document.getElementsByClassName('checkbox-input');
const TermOfUse = document.getElementById('checkbox1');
const reserveForm = document.getElementById('reserve');

// Regex expression
const regexName = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;


/**
 * Check firstname validity input
 * @returns {Boolean}
 **/
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

/**
 * Check lastname validity input
 * @returns {Boolean}
 **/
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

/**
 * Check email validity input
 * @returns {Boolean}
 **/
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

/**
 * Check birth date validity input
 * @returns {Boolean}
 **/
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

/**
 * Check tournament quantity validity input
 * @returns {Boolean}
 **/
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
 * Check if one location input is checked
 * @returns {Boolean}
 **/
function checkLocation() {
  for (let i = 0; i < locationRadioButton.length; i++) {
    if (locationRadioButton[i].checked) {
      allLocations.setAttribute('data-error-visible', 'false');
      return true;
    }
  }
  allLocations.setAttribute('data-error-visible', 'true');
  return false;
}

/**
 * Check if terms of use checkbox is checked
 * @returns {Boolean}
 **/
function checkTermOfUse() {
  if (TermOfUse.checked === false) {
    TermOfUse.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  }
  TermOfUse.parentElement.setAttribute('data-error-visible', 'false');
  return true;
}

/**
 * Call validity check field function in each focusout event of the field
 * @param {HTMLElement} element
 * @param {Boolean} method
 * @param {Event} event
 **/
function checkInputValidity(element, method, event) {
  element.addEventListener(event, method);
}
checkInputValidity(firstName, checkFirstName, 'focusout');
checkInputValidity(lastName, checkLastName, 'focusout');
checkInputValidity(email, checkEmail, 'focusout');
checkInputValidity(birthdate, checkBirthDate, 'focusout');
checkInputValidity(quantity, checkTournamentQuantity, 'focusout');
checkInputValidity(quantity, checkLocation, 'change');
checkInputValidity(quantity, checkTermOfUse, 'change');

//Check all inputs form validity
function checkAllInputsValidity() {
    checkFirstName();
    checkLastName();
    checkEmail();
    checkBirthDate ();
    checkTournamentQuantity();
    checkLocation();
    checkTermOfUse();
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
    checkTournamentQuantity() === true &&
    checkLocation() === true &&
    checkTermOfUse() === true
  ) {
    return true;
  } else {
    return false;
  }
}

//Submit form by checking its validity and display a pop-up when submission is successful
function submitForm() {
  reserveForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (checkFormValidity() === true) {
      displayModalConfirmation();
      reserveForm.reset();
    } else {
      checkAllInputsValidity();
    }
  });
}
submitForm();

