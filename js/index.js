import { Card } from './Card.js';
import { initialCards } from './initial-cards.js';
import { FormValidator } from './FormValidator.js';

export { openBigImage };

const selectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};

const popupEdit = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupPhoto = document.querySelector('.popup_type_image');
const popupForm = popupEdit.querySelector('.popup__form');
const popupCloseEdit = popupEdit.querySelector('.popup__close_type_edit');
const popupCloseNewCard = popupNewCard.querySelector('.popup__close_type_new-card');
const photoCloseImage = popupPhoto.querySelector('.photo__close');
const profileName = popupEdit.querySelector('.popup__input_type_profile-name');
const profileJob = popupEdit.querySelector('.popup__input_type_profile-job');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const buttonEdit = document.querySelector('.profile__edit-button');
const elementsContainer = document.querySelector('.elements__container');
const photoItem = popupPhoto.querySelector('.photo__item');
const subtitlePhoto = popupPhoto.querySelector('.photo__subtitle');
const titleName = popupNewCard.querySelector('.popup__input_type_card-name');
const photoLink = popupNewCard.querySelector('.popup__input_type_card-link');
const cardAdd = document.querySelector('.profile__add-button');

const formProfile = new FormValidator(selectors, popupEdit);
formProfile.enableValidation();
const formCardsAdd = new FormValidator(selectors, popupNewCard);
formCardsAdd.enableValidation();

function openPopup(modal) {
  modal.classList.add('popup_opened');
}

function closePopup(modal) {
  modal.classList.remove('popup_opened');
}

function openBigImage() {
  photoItem.src = this.src;
  subtitlePhoto.textContent = this.alt;
  photoItem.alt = this.alt;
  openPopup(popupPhoto);
}

function handleEscapeKey(evt) {
  const popupOpened = document.querySelector('.popup_opened');
  if (document.contains(popupOpened)) {
    if (evt.key === 'Escape') {
      closePopup(popupOpened);
    }
  }
}

function handleMouseClick(evt) {
  const popupOpened = document.querySelector('.popup_opened');
  if (evt.target.classList.contains('popup')) {
    closePopup(popupOpened);
  }
}

document.addEventListener('keydown', handleEscapeKey);

popupEdit.addEventListener('click', handleMouseClick);

popupNewCard.addEventListener('click', handleMouseClick);

popupPhoto.addEventListener('click', handleMouseClick);

popupCloseEdit.addEventListener('click', () => {
  closePopup(popupEdit);
});

popupCloseNewCard.addEventListener('click', () => {
  closePopup(popupNewCard);
});

photoCloseImage.addEventListener('click', () => {
  closePopup(popupPhoto);
});

buttonEdit.addEventListener('click', () => {
  takeInputValue();
  formProfile.clearValidation();
  openPopup(popupEdit);
});

cardAdd.addEventListener('click', () => {
  clearInputValue();
  formCardsAdd.clearValidation();
  openPopup(popupNewCard);
});

function takeInputValue() {
  profileName.value = profileTitle.textContent;
  profileJob.value = profileSubtitle.textContent;
}

function clearInputValue() {
  titleName.value = '';
  photoLink.value = '';
}

function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileName.value;
  profileSubtitle.textContent = profileJob.value;
  closePopup(popupEdit);
}

function createCard(data) {
  const card = new Card(data, '#element-template');
  return card.generateCard();
}

function handleAddCardPrepend(data) {
  elementsContainer.prepend(createCard(data));
}

function handleAddCardAppend(data) {
  elementsContainer.append(createCard(data));
}

popupForm.addEventListener('submit', handleFormProfileSubmit);

initialCards.forEach((item) => {
  handleAddCardAppend(item);
});

function handleFormCardSubmit(evt) {
  evt.preventDefault();
  const data = {};
  data.name = titleName.value;
  data.link = photoLink.value;
  handleAddCardPrepend(data);
  closePopup(popupNewCard);
  document.querySelector('#form-new-card').reset();
}

popupNewCard.addEventListener('submit', handleFormCardSubmit);
