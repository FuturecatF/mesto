export const selectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};
export const popupPhoto = document.querySelector('.popup_type_image');
export const popupEdit = document.querySelector('.popup_type_edit');
export const popupNewCard = document.querySelector('.popup_type_new-card');
export const profileName = popupEdit.querySelector('.popup__input_type_profile-name');
export const profileJob = popupEdit.querySelector('.popup__input_type_profile-job');
export const profileTitle = document.querySelector('.profile__title');
export const profileSubtitle = document.querySelector('.profile__subtitle');
export const buttonEdit = document.querySelector('.profile__edit-button');
export const elementsContainer = document.querySelector('.elements__container');
export const cardAdd = document.querySelector('.profile__add-button');
export const profileForm = popupEdit.querySelector('.popup__form_type_profile-form');
export const cardForm = popupNewCard.querySelector('.popup__form_type_card-form');
