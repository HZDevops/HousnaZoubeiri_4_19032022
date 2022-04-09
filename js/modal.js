// DOM Elements
const mainNavBar = document.querySelector('.main-navbar')
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const closeModalBtn = document.getElementsByClassName('close');

// Display navbar responsive
function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// Launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// Launch modal form
function launchModal() {
  modalbg.style.display = 'block';
  mainSection.style.display= 'none';
}

// Close modal form
function closeModal() {
  modalbg.style.display = 'none';
  mainSection.style.display = 'block';
}
closeModalBtn[0].addEventListener('click', closeModal);




