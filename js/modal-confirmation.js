// DOM elemnts of submit confirmation modal
const modalSubmitConfirmation = document.getElementsByClassName('modal-confirmation');
const closeModalSubmitConfirmation = document.getElementsByClassName('close-modal-confirmation'
);
const closeBtnSubmitConfirmation = document.getElementById('close-btn-confirmation');

// Display modal confirmation
function displayModalConfirmation() {
  modalbg.style.display = 'none';
  modalSubmitConfirmation[0].style.display = 'block';
}

// Close modal confirmation
function closeModalConfirmation() {
  modalSubmitConfirmation[0].style.display = 'none';
  first.style.border = 'none';
  last.style.border = 'none';
  email.style.border = 'none';
  birthdate.style.border = 'none';
  quantity.style.border = 'none';
}

// Event closing modal confirmation
closeModalSubmitConfirmation[0].addEventListener('click', closeModalConfirmation);
closeBtnSubmitConfirmation.addEventListener('click', closeModalConfirmation);
