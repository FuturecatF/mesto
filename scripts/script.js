let popup = document.querySelector('.popup');
let editButton = document.querySelector('.edit-button');
let popupClose = document.querySelector('.popup__close');
let popupName = document.querySelector('.popup__name');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let popupJob = document.querySelector('.popup__job');
let popupForm = document.querySelector('.popup__form');
let popupButton = document.querySelector('.popup__button');
let likeButton = document.querySelector('.element__like ');

function togglePopup() {
  popup.classList.toggle('popup-toggle');
  takePlaceholder();
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

  function handleFormSubmit(evt) {
  evt.preventDefault();
  if (popupName.value.length > 0) {
  profileTitle.textContent = popupName.value;
  }
  if (popupJob.value.length > 0) {
  profileSubtitle.textContent = popupJob.value;
  }
  togglePopup();
}

function inputText() {

  popupButton.classList.add('popup__button_btn_active');

}

function likeActivated() {
  if (likeButton.classList.contains('element__like_active') !== true) {
  likeButton.classList.add('element__like_active');
  } else {
    likeButton.classList.remove('element__like_active');
  }
}

editButton.addEventListener('click', togglePopup);
popupClose.addEventListener('click', togglePopup);
popupForm.addEventListener('submit', handleFormSubmit);
popupForm.addEventListener('input', inputText);
likeButton.addEventListener('click', likeActivated);
