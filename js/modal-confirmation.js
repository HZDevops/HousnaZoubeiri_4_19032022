// DOM elemnts of submit confirmation modal
const modalSubmitConfirmation = document.querySelector('.modal-confirmation');
const closeModalSubmitConfirmation = document.getElementsByClassName('close-modal-confirmation'
);
const closeBtnSubmitConfirmation = document.getElementById('close-btn-confirmation');

// Display modal confirmation
function displayModalConfirmation() {
  modalbg.style.display = 'none';
  modalSubmitConfirmation.style.display = 'block';
  modalSubmitConfirmation.style.position = 'absolute';
  modalSubmitConfirmation.style.top = '50px';
}

// Close modal confirmation
function closeModalConfirmation() {
  modalSubmitConfirmation.style.display = 'none';
  first.style.border = 'none';
  last.style.border = 'none';
  email.style.border = 'none';
  birthdate.style.border = 'none';
  quantity.style.border = 'none';
}

// Event closing modal confirmation
closeModalSubmitConfirmation[0].addEventListener('click', closeModalConfirmation);
closeBtnSubmitConfirmation.addEventListener('click', closeModalConfirmation);
