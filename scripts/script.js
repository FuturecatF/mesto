const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_type_edit');
const popupForm = popup.querySelector('.popup__form');
const popupButton = popupForm.querySelector('.popup__button');

const popupClose = popup.querySelector('.popup__close');
const popupCloseEdit = document.querySelector('.popup__close_type_edit');
const popupCloseNewCard = document.querySelector('.popup__close_type_new-card');
const popupCloseImage = document.querySelector('.popup__close_type_image');

const profileName = document.getElementsByName('profile-name');
const profileJob = document.getElementsByName('profile-job');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const editButton = document.querySelector('.profile__edit-button');

function toogleModal(evt) {
  evt.target.classList.toggle('popup_opened');
}

popupCloseEdit.addEventListener('click', toogleModal);
popupCloseNewCard.addEventListener('click', toogleModal);
popupCloseImage.addEventListener('click', toogleModal);


function togglePopup() {
  // popupEdit.classList.toggle('popup_opened');
  takeInputValue();
  popupButton.setAttribute('disabled', 'вжух');
  popupButton.classList.remove('popup__button_active');
}

function takeInputValue() {
  profileName[0].value = profileTitle.textContent;
  profileJob[0].value = profileSubtitle.textContent;
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileName[0].value;
  profileSubtitle.textContent = profileJob[0].value;
  togglePopup();
}

function checkRegexInput() {
  const regexp = /^([^\-_\s][A-Za-zА-Яа-яЁё\s_-]{1,40}[^\-_\s])$/i;
  if (regexp.test(profileName[0].value) === true && regexp.test(profileJob[0].value) === true) {
    popupButton.removeAttribute('disabled', 'вжух');
    popupButton.classList.add('popup__button_active');
  } else {
    popupButton.setAttribute('disabled', 'вжух');
    popupButton.classList.remove('popup__button_active');
  }
}



editButton.addEventListener('click', togglePopup);
popupForm.addEventListener('submit', handleFormSubmit);
popupForm.addEventListener('input', checkRegexInput);

// Проект 5
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

const elementTemplate = document.querySelector('#element-template').content;
const elementsContainer = document.querySelector('.elements__container');
const photoItem = document.querySelector('.photo__item');
const subtitlePhoto = document.querySelector('.photo__subtitle');
const popupAddCard = document.querySelector('.popup_type_new-card');
const titleName = document.getElementsByName('title-name');
const photoLink = document.getElementsByName('photo-link');
const addCard = document.querySelector('.profile__add-button');
const popupPhoto = document.querySelector('.popup_type_image');


function render() {
  initialCards.forEach(renderCard);
}

function getCard(data) {
  const element = elementTemplate.cloneNode(true);
  element.querySelector('.element__subtitle').textContent = data.name;
  element.querySelector('.element__photo').src = data.link;
  element.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
     });
  element.querySelector('.element__photo').addEventListener('click', function (evt) {
    if (evt.target) {
    popupPhoto.classList.add('popup_opened');
    photoItem.src = this.src;
    subtitlePhoto.textContent = data.name;
    }
       });
  element.querySelector('.element__delete-icon').addEventListener('click', function (evt) {
        evt.target.closest('.element').remove();
           });
     return element;
}

function renderCard(data) {
  elementsContainer.append(getCard(data));
}

render();

function renderNewCard(data) {
  elementsContainer.prepend(getCard(data));
}

function submitNewCard(evt) {
  evt.preventDefault();
  popupButton.classList.add('popup__button_active');
  const data = {};
  data.name = titleName[0].value;
  data.link = photoLink[0].value;
  renderNewCard(data);
  popupAddCard.classList.remove('popup_opened');
  clearValue();
}

function clearValue() {
  photoLink[0].value = '';
  titleName[0].value = '';
}

function addCardPopupOpened() {
  popupAddCard.classList.add('popup_opened');
}

addCard.addEventListener('click', addCardPopupOpened);
popupAddCard.addEventListener('submit', submitNewCard);
