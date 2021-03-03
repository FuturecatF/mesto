import { Card } from './Card.js';
import { initialCards } from './initial-cards.js';
import { FormValidator } from './FormValidator.js';
import { PopupWithForm } from './PopupWithForm.js';
import { PopupWithImage } from './PopupWithImage.js';
import { Section } from './Section.js';
import { UserInfo } from './UserInfo.js';


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
export const profileName = popupEdit.querySelector('.popup__input_type_profile-name');
export const profileJob = popupEdit.querySelector('.popup__input_type_profile-job');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const buttonEdit = document.querySelector('.profile__edit-button');
const elementsContainer = document.querySelector('.elements__container');
export const photoItem = popupPhoto.querySelector('.photo__item');
export const subtitlePhoto = popupPhoto.querySelector('.photo__subtitle');
const titleName = popupNewCard.querySelector('.popup__input_type_card-name');
const photoLink = popupNewCard.querySelector('.popup__input_type_card-link');
const cardAdd = document.querySelector('.profile__add-button');
const profileForm = popupEdit.querySelector('.popup__form_type_profile-form');
const cardForm = popupNewCard.querySelector('.popup__form_type_card-form');

const formProfile = new FormValidator(selectors, profileForm);
formProfile.enableValidation();
const formCardsAdd = new FormValidator(selectors, cardForm);
formCardsAdd.enableValidation();


/* function openPopup(modal) {
  modal.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscapeKey);
} */

/* function closePopup(modal) {
  modal.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscapeKey);
} */

const popupWithImage = new PopupWithImage(popupPhoto);
popupWithImage.setEventListeners();

/* function handleCardClick() {
 openImage.open();
} */

/* function handleEscapeKey(evt) {
  const popupOpened = document.querySelector('.popup_opened');
  if (document.contains(popupOpened)) {
    if (evt.key === 'Escape') {
      closePopup(popupOpened);
    }
  }
} */

/* function handleMouseClick(evt) {
  const popupOpened = document.querySelector('.popup_opened');
  if (evt.target.classList.contains('popup')) {
    closePopup(popupOpened);
  }
} */

/* popupEdit.addEventListener('click', handleMouseClick);

popupNewCard.addEventListener('click', handleMouseClick);

popupPhoto.addEventListener('click', handleMouseClick); */

/* popupCloseEdit.addEventListener('click', () => {
  closePopup(popupEdit);
}); */

/* popupCloseNewCard.addEventListener('click', () => {
  closePopup(popupNewCard);
}); */

/* photoCloseImage.addEventListener('click', () => {
  closePopup(popupPhoto);
}); */

const popupFormEdit = new PopupWithForm(popupEdit, handleFormProfileSubmit);
popupFormEdit.setEventListeners();
const popupFormAddCard = new PopupWithForm(popupNewCard, handleFormCardSubmit);
popupFormAddCard.setEventListeners();

const userInfo = new UserInfo({ name: profileTitle, job: profileSubtitle });

buttonEdit.addEventListener('click', () => {
  userInfo.getUserInfo();
  formProfile.clearValidation();
  popupFormEdit.open();

});

cardAdd.addEventListener('click', () => {
  clearInputValue();
  formCardsAdd.clearValidation();
  popupFormAddCard.open();
});

/* function takeInputValue() {
  profileName.value = profileTitle.textContent;
  profileJob.value = profileSubtitle.textContent;
} */

function clearInputValue() {
  titleName.value = '';
  photoLink.value = '';
}

function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  userInfo.setUserInfo();
  popupFormEdit.close();
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

//popupForm.addEventListener('submit', handleFormProfileSubmit);

/* initialCards.forEach((item) => {
  handleAddCardAppend(item);
}); */

function handleFormCardSubmit(evt) {
  evt.preventDefault();
  const item = {};
  item.name = titleName.value;
  item.link = photoLink.value;
  // handleAddCardPrepend(data);
  // closePopup(popupNewCard);
  cardList.addNewItem(handleAddCard(item));
  //document.querySelector('#form-new-card').reset();
  popupFormAddCard.close();
}

//popupNewCard.addEventListener('submit', handleFormCardSubmit);

//ПРОЕКТ 8
//класс Sectiom


function handleAddCard(item) {
  const card = new Card({
    data: item, handleCardClick: (name, link) => {
      popupWithImage.open(name, link);
    }
  }, '#element-template');
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






//класс UserInfo


