let popup = document.querySelector('.popup');
let popupForm = popup.querySelector('.popup__form');
let popupButton = popupForm.querySelector('.popup__button');
let popupClose = popup.querySelector('.popup__close');
let profileName = document.getElementsByName('profile-name');
let profileJob = document.getElementsByName('profile-job');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let editButton = document.querySelector('.profile__edit-button');

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

//Добавляем карточки из массива и лайки
const elementsContainer = document.querySelector('.elements__container');
const elementTemplate = elementsContainer.querySelector('#element-template').content;

initialCards.forEach(function (item) {
const element = elementTemplate.cloneNode(true);
element.querySelector('.element__subtitle').textContent = item.name;
element.querySelector('.element__photo').src = item.link;

const likeButton = element.querySelector('.element__like');
likeButton.addEventListener('click', function (evt) {
  if (evt.target) {
    likeButton.classList.toggle('element__like_active');
  }
});

elementsContainer.append(element);
});







// Конец проекта 5
function togglePopup() {
  popup.classList.toggle('popup_opened');
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
popupClose.addEventListener('click', togglePopup);
popupForm.addEventListener('submit', handleFormSubmit);
popupForm.addEventListener('input', checkRegexInput);
