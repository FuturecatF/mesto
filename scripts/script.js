let popup = document.querySelector('.popup');
let editButton = document.querySelector('.edit-button');
let popupClose = document.querySelector('.popup__close');
let popupName = document.querySelector('.popup__name');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let popupJob = document.querySelector('.popup__job');
let popupButton = document.querySelector('.popup__button');

function togglePopup() {
  popup.classList.toggle('popup-toggle');
}

function takePlaceholder() {
  popupName.placeholder = profileTitle.textContent;
  popupJob.placeholder = profileSubtitle.textContent;
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  let newName = popupName.value;
  profileTitle.textContent = newName;
  let newJob = popupJob.value;
  profileSubtitle.textContent = newJob;
}

takePlaceholder();
editButton.addEventListener('click', togglePopup);
popupClose.addEventListener('click', togglePopup);
popupButton.addEventListener('submit', handleFormSubmit);
