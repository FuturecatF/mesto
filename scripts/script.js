let popUp = document.querySelector('.popup');
let editButton = document.querySelector('.edit-button');
let popupClose = document.querySelector('.popup__close');

function togglePopup() {
  popUp.classList.toggle('popup-toggle');
}






editButton.addEventListener('click', togglePopup);
popupClose.addEventListener('click', togglePopup);
