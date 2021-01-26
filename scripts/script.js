const popupEdit = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupPhoto = document.querySelector('.popup_type_image');
const popupForm = popupEdit.querySelector('.popup__form');
const popupButton = popupForm.querySelector('.popup__button');
const popupCloseEdit = popupEdit.querySelector('.popup__close_type_edit');
const popupCloseNewCard = popupNewCard.querySelector('.popup__close_type_new-card');
const popupClose = popupPhoto.querySelector('.popup__close');
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
const elementTemplate = document.querySelector('#element-template').content;

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function toogleModal(modal) {
  modal.classList.toggle('popup_opened');
}

popupCloseEdit.addEventListener('click', () => {
  toogleModal(popupEdit);
});

popupCloseNewCard.addEventListener('click', () => {
  toogleModal(popupNewCard);
});

photoCloseImage.addEventListener('click', () => {
  toogleModal(popupPhoto);
});

buttonEdit.addEventListener('click', () => {
  toogleModal(popupEdit);
  takeInputValue();
});

cardAdd.addEventListener('click', () => {
  toogleModal(popupNewCard);
  clearValue();
});


function takeInputValue() {
  profileName.value = profileTitle.textContent;
  profileJob.value = profileSubtitle.textContent;
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileName.value;
  profileSubtitle.textContent = profileJob.value;
  toogleModal(popupEdit);
}

popupForm.addEventListener('submit', handleFormSubmit);

initialCards.forEach(renderCard);


function getCard(data) {
  const card = elementTemplate.cloneNode(true);
  card.querySelector('.element__subtitle').textContent = data.name;
  card.querySelector('.element__photo').src = data.link;
  card.querySelector('.element__photo').alt = data.name;
  card.querySelector('.element__like').addEventListener('click', function (evt) {
    likeCard(evt);
  });
  card.querySelector('.element__photo').addEventListener('click', function (evt) {
    addCard(evt);
  });
  card.querySelector('.element__delete-icon').addEventListener('click', function (evt) {
    deleteCard(evt);
  });

  return card;
}

function likeCard(evt) {
  evt.target.classList.toggle('element__like_active');
}

function addCard(evt) {
    popupPhoto.classList.add('popup_opened');
    photoItem.src = evt.target.src;
    subtitlePhoto.textContent = evt.target.alt;
    photoItem.alt = evt.target.alt;
}

function deleteCard (evt) {
  evt.target.closest('.element').remove();
}

function renderCard(data) {
  elementsContainer.append(getCard(data));
}

function renderNewCard(data) {
  elementsContainer.prepend(getCard(data));
}

function submitNewCard(evt) {
  evt.preventDefault();
  popupButton.classList.add('popup__button_active');
  const data = {};
  data.name = titleName.value;
  data.link = photoLink.value;
  renderNewCard(data);
  toogleModal(popupNewCard);
}

function clearValue() {
  photoLink.value = '';
  titleName.value = '';
}

popupNewCard.addEventListener('submit', submitNewCard);
