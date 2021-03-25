import '../pages/index.css';
import '../index.html';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithSubmit } from '../components/PopupWithSubmit.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';
import { requestLoading } from '../utils/utils.js'

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
  popupYesOnSubmit,
  buttonProfileAvatar,
  avatarImagePopup,
  avatarForm,
  porfileAvatar,
  popupButtonAvatar,
  buttonNewMesto,
  buttonProfileEdit,
  popupButtonYes,
} from '../utils/constants.js'

let userId = 0;
//9 ПРОЕКТ
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-21',
  headers: {
    authorization: '5f8b754d-d9bd-4968-8e18-8ef729e76020',
    'content-type': 'application/json'
  }
});

Promise.all([api.getUserProfile(), api.getInitialCards()])
  .then(([data, initialCards]) => {
    userInfo.setUserInfo(data)
    userId = data._id;

    const cardList = new Section({
      items: initialCards,
      renderer: (item) => {
        cardList.addItem(createCard(item));
      }
    }, elementsContainer);

    cardList.renderItems();

  })
  .catch((err) => {
    console.log(err);
  })







//9 ПРОЕКТ


const formProfile = new FormValidator(selectors, profileForm);
formProfile.enableValidation();
const formCardsAdd = new FormValidator(selectors, cardForm);
formCardsAdd.enableValidation();
const formAvatar = new FormValidator(selectors, avatarForm);
formAvatar.enableValidation();

const popupFormEdit = new PopupWithForm(popupEdit, {
  handleFormSubmit: (item) => {
    requestLoading(buttonProfileEdit, true, 'Сохранение...');
    const data = {
      name: item['name'],
      about: item['job']
    }
    api.setUserProfile(data).then(item => {
      userInfo.setUserInfo(item);
    })
      .finally(() => {
        requestLoading(buttonProfileEdit, true, 'Сохранить');
        popupFormEdit.close();
      })
  }
});

popupFormEdit.setEventListeners();


const popupFormAddCard = new PopupWithForm(popupNewCard, {
  handleFormSubmit: (item) => {
    requestLoading(buttonNewMesto, true, 'Сохранение...');
    const data = {
      name: item['image-name'],
      link: item['link']
    }
    api.postNewCard(data)
      .then(item => {
        elementsContainer.prepend(createCard(item));
      })
      .finally(() => {
        requestLoading(buttonNewMesto, false, 'Создать');
        popupFormAddCard.close();
      })

  }
});


popupFormAddCard.setEventListeners();

const popupWithImage = new PopupWithImage(popupPhoto);
popupWithImage.setEventListeners();

const userInfo = new UserInfo({ name: profileTitle, about: profileSubtitle, avatar: porfileAvatar });

buttonEdit.addEventListener('click', () => {
  profileName.value = userInfo.getUserInfo().name;
  profileJob.value = userInfo.getUserInfo().about;
  formProfile.clearValidation();
  popupFormEdit.open();
});

cardAdd.addEventListener('click', () => {
  formCardsAdd.clearValidation();
  popupFormAddCard.open();
});

const popupWithSubmit = new PopupWithSubmit(popupYesOnSubmit);
popupWithSubmit.setEventListeners();

function createCard(item) {
  const card = new Card({
    data: item,
    handleCardClick: (name, link) => {
      popupWithImage.open(name, link);
    },
    handleDeleteClick: (cardId, element) => {
      popupWithSubmit.open();
      popupButtonYes.addEventListener('click', () => {
        popupWithSubmit.handleDeleteCard(() => {
          requestLoading(popupButtonYes, true, 'Сохранение...');
          api.deleteCard(cardId)
            .then(() => {
              element.remove();
            })
            .finally(() => {
              requestLoading(popupButtonYes, false, 'Да')
              popupWithSubmit.close();
            })
        })
      })
    },

    handleLike: (cardId, element) => {
      if (!element.querySelector('.element__like').classList.contains('element__like_active')) {
        api.putLikeCard(cardId).then((data) => {
          card.likeCard(element, data);
        });
      } else {
        api.deleteLikeCard(cardId).then((data) => {
          card.likeCard(element, data);
        });
      }
    }
  }, '#element-template', userId);

  const cardElement = card.generateCard();

  return cardElement;
}


const popupAvatar = new PopupWithForm(avatarImagePopup, {
  handleFormSubmit: (item) => {
    requestLoading(popupButtonAvatar, true, 'Сохранение...');
    const data = {
      avatar: item['avatar-image'],
    }
    api.setUserAvatar(data)
      .then((item) => {
        userInfo.setUserInfo(item);
      })
      .finally(() => {
        requestLoading(popupButtonAvatar, false, 'Сохранить');
        popupAvatar.close();
      })
  }
});

popupAvatar.setEventListeners();

buttonProfileAvatar.addEventListener('click', () => {
  formAvatar.clearValidation();
  popupAvatar.open();
});



