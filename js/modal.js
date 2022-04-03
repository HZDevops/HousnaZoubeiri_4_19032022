// DOM Elements
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
}

// Close modal form
function closeModal() {
  modalbg.style.display = 'none';
}
closeModalBtn[0].addEventListener('click', closeModal);




