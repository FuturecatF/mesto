import '../pages/index.css';
import '../index.html';
import { Card } from '../components/Card.js';
import { initialCards } from '../utils/initial-cards.js';
import { FormValidator } from '../components/FormValidator.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';

import {
  selectors,
  popupEdit,
  popupNewCard,
  profileName,
  profileJob,
  popupPhoto,
  profileTitle,
  profileSubtitle,
  buttonEdit,
  elementsContainer,
  cardAdd,
  profileForm,
  cardForm,
} from '../utils/constants.js'

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
    cardList.addNewItem(createCard(data));
    popupFormAddCard.close();
  }
});
popupFormAddCard.setEventListeners();

const popupWithImage = new PopupWithImage(popupPhoto);
popupWithImage.setEventListeners();

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

function createCard(item) {
  const card = new Card({
    data: item,
    handleCardClick: (name, link) => {
      popupWithImage.open(name, link);

    }
  }, '#element-template');
  const cardElement = card.generateCard();

  return cardElement;
}

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardList.addItem(createCard(item));
  }
}, elementsContainer);

cardList.renderItems();



