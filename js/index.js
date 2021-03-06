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
const profileName = popupEdit.querySelector('.popup__input_type_profile-name');
const profileJob = popupEdit.querySelector('.popup__input_type_profile-job');
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

const popupFormEdit = new PopupWithForm(popupEdit, {
  handleFormSubmit: (input) => {
    const data = {
      name: input['name'],
      job: input['job']
    }

    userInfo.setUserInfo(data);
    popupFormEdit.close();
  }
});
popupFormEdit.setEventListeners();

const popupFormAddCard = new PopupWithForm(popupNewCard, {
  handleFormSubmit: (input) => {
    const data = {
      name: input['image-name'],
      link: input['link']
    }
    cardList.addNewItem(handleAddCard(data));
    popupFormAddCard.close();
  }
});
popupFormAddCard.setEventListeners();

const userInfo = new UserInfo({ name: profileTitle, job: profileSubtitle });

buttonEdit.addEventListener('click', () => {
  profileName.value = userInfo.getUserInfo().name;
  profileJob.value = userInfo.getUserInfo().job;
  formProfile.clearValidation();
  popupFormEdit.open();

});

cardAdd.addEventListener('click', () => {
  formCardsAdd.clearValidation();
  popupFormAddCard.open();
});

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



