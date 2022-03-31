const modalReserveConfirmation = document.getElementById('modal-confirmation');
const modalReserveCross = document.getElementsByClassName('close-modal-confirmation');

//Display a modal when reservation form is validated
function displayModalConfirmation() {
    modalbg.style.display = 'none';
    modalReserveConfirmation.style.display = 'block';
    modalReserveCross.addEventListener('click', function (e) {
        e.preventDefault();
        modalReserveConfirmation.style.display = 'none';
    });
    window.addEventListener('click', function (e) {
        if (e.target === modalReserveConfirmation) {
         modalReserveConfirmation.style.display = 'none';
        }
    });
}
