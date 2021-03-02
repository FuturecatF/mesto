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
const profileForm = popupEdit.querySelector('.popup__form_type_profile-form');
const cardForm = popupNewCard.querySelector('.popup__form_type_card-form');

const formProfile = new FormValidator(selectors, profileForm);
formProfile.enableValidation();
const formCardsAdd = new FormValidator(selectors, cardForm);
formCardsAdd.enableValidation();

function openPopup(modal) {
  modal.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscapeKey);
}

function closePopup(modal) {
  modal.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscapeKey);
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

//function createCard(data) {
// const card = new Card(data, '#element-template');
//  return card.generateCard();
//}

/* function handleAddCardPrepend(data) {
  elementsContainer.prepend(createCard(data));
}

function handleAddCardAppend(data) {
  elementsContainer.append(createCard(data));
} */

popupForm.addEventListener('submit', handleFormProfileSubmit);

/* initialCards.forEach((item) => {
  handleAddCardAppend(item);
}); */

function handleFormCardSubmit(evt) {
  evt.preventDefault();
  const data = {};
  data.name = titleName.value;
  data.link = photoLink.value;
  // handleAddCardPrepend(data);
  closePopup(popupNewCard);
  document.querySelector('#form-new-card').reset();
}

popupNewCard.addEventListener('submit', handleFormCardSubmit);

//ПРОЕКТ 8
//класс Sectiom
class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  addItem(element) {
    this._container.append(element);
  }

  addNewItem(element) {
    this._container.prepend(element);
  }

  renderItems() {
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }
}

function handleAddCard(item) {
  const card = new Card(item, '#element-template');
  const cardElement = card.generateCard();
  return cardElement;
}

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardList.addItem(handleAddCard(item));
  }
}, elementsContainer);

cardList.renderItems();
//класс Popup

/* class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  open() {

  }

  close() {

  }

  _handleEscClose() {

  }

  setEventListeners() {

  }
}

//класс PopupWithImage
class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
}

//класс PopupWithForm
class PopupWithForm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
}
//класс UserInfo */


