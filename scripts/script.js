let popup = document.querySelector('.popup');
let editButton = document.querySelector('.edit-button');
let popupClose = document.querySelector('.popup__close');
let popupName = document.querySelector('.popup__name');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let popupJob = document.querySelector('.popup__job');
let popupButton = document.querySelector('.popup__button');

let popupForm = document.querySelector('.popup__form');

function togglePopup() {
  popup.classList.toggle('popup-toggle');
  clearValue();
}

function clearValue() {
  popupName.value = "";
  popupJob.value = "";
}


function takePlaceholder() {
  popupName.placeholder = profileTitle.textContent;
  popupJob.placeholder = profileSubtitle.textContent;
}

  popupForm.onsubmit = function(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupName.value;
  profileSubtitle.textContent = popupJob.value;
  togglePopup();
}

takePlaceholder();
editButton.addEventListener('click', togglePopup);
popupClose.addEventListener('click', togglePopup);
popupButton.addEventListener('submit', onsubmit);

