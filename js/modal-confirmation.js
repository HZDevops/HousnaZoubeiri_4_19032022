const modalConfirmation = document.getElementById('modal-confirmation');
const modalConfirmationCross = document.getElementsByClassName('close-modal-confirmation'
)[0];

//Display a modal when reservation form is validated
function displayModalConfirmation() {
    modalbg.style.display = 'none';
    modalConfirmation.style.display = 'block';
    modalConfirmationCross.addEventListener('click', function (e) {
      e.preventDefault();
      modalConfirmation.style.display = 'none';
    });
    window.addEventListener('click', function (e) {
        if (e.target === modalConfirmation) {
         modalConfirmation.style.display = 'none';
        }
    });
}
