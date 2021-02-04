const popupEdit = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupPhoto = document.querySelector('.popup_type_image');
const popupForm = document.querySelector('.popup__form');
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
const elementTemplate = document.querySelector('#element-template').content;

function toogleModal(modal) {
  modal.classList.toggle('popup_opened');
}

function handleEscapeKey(evt) {
  const popupOpened = document.querySelector('.popup_opened');
  if (document.contains(popupOpened)) {
    if (evt.key === 'Escape') {
      toogleModal(popupOpened);
    }
  }
}

document.addEventListener('keydown', handleEscapeKey);

popupEdit.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup_opened')) {
    toogleModal(popupEdit);
  }
});

popupNewCard.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup_opened')) {
    toogleModal(popupNewCard);
  }
});

popupPhoto.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup_opened')) {
    toogleModal(popupPhoto);
  }
});

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
  const buttonCard = popupNewCard.querySelector('.popup__button');
  buttonCard.setAttribute("disabled", true);
  buttonCard.classList.add('popup__button_disabled');
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
  const cardPhoto = card.querySelector('.element__photo');
  card.querySelector('.element__subtitle').textContent = data.name;
  cardPhoto.src = data.link;
  cardPhoto.alt = data.name;
  cardPhoto.addEventListener('click', function (evt) {
    addCard(evt);
  });
  card.querySelector('.element__like').addEventListener('click', function (evt) {
    likeCard(evt);
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
  photoItem.src = evt.target.src;
  subtitlePhoto.textContent = evt.target.alt;
  photoItem.alt = evt.target.alt;
  toogleModal(popupPhoto);
}

function deleteCard(evt) {
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
  const data = {};
  data.name = titleName.value;
  data.link = photoLink.value;
  renderNewCard(data);
  toogleModal(popupNewCard);
  document.querySelector('#form-new-card').reset();
}

popupNewCard.addEventListener('submit', submitNewCard);
