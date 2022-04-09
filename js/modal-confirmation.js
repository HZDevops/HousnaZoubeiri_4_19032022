// DOM elements of submit confirmation modal
const mainSection = document.querySelector('.hero-section');
const modalSubmitConfirmation = document.querySelector('.modal-confirmation');
const closeModalSubmitConfirmation = document.getElementsByClassName('close-modal-confirmation'
);
const closeBtnSubmitConfirmation = document.getElementById('close-btn-confirmation');

// Display modal confirmation
function displayModalConfirmation() {
  modalbg.style.display = 'none';
  mainSection.style.display = 'none';
  modalSubmitConfirmation.style.display = 'block';
  modalSubmitConfirmation.style.position = 'absolute';
  modalSubmitConfirmation.style.top = '50px';
}

// Close modal confirmation
function closeModalConfirmation() {
  modalSubmitConfirmation.style.display = 'none';
  mainSection.style.display = 'block';
}

// Event closing modal confirmation
closeModalSubmitConfirmation[0].addEventListener('click', closeModalConfirmation);
closeBtnSubmitConfirmation.addEventListener('click', closeModalConfirmation);
