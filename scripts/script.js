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




const elementTemplate = document.querySelector('#element-template').content;
const elementsContainer = document.querySelector('.elements__container');
const b = document.querySelector('.b');
const subtitlePhoto = document.querySelector('.photo__subtitle');

const popupAddCard = document.querySelector('.popup_type_new-card');
const titleName = document.getElementsByName('title-name');
const photoLink = document.getElementsByName('photo-link');
const addCard = document.querySelector('.profile__add-button');


function render() {
  initialCards.forEach(renderCard);
}

function renderCard(link, name) {
  const element = elementTemplate.cloneNode(true);
  element.querySelector('.element__subtitle').textContent = name.name;
  element.querySelector('.element__photo').src = link.link;
  element.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
     });
     elementsContainer.append(element);
}


function submitNewCard(evt) {
  evt.preventDefault();
  renderCard(photoLink[0].value, titleName[0].value);
  popupAddCard.classList.remove('popup_opened');
}


 // data.link = photoLink[0].value;
  //data.name = titleName[0].value;


  // elementsContainer.prepend(element);


function addCardPopupOpened() {
  popupAddCard.classList.add('popup_opened');
}



render();
addCard.addEventListener('click', addCardPopupOpened);
popupAddCard.addEventListener('submit', submitNewCard);

/**
initialCards.forEach(function (item) {
const element = elementTemplate.cloneNode(true); -->
element.querySelector('.element__subtitle').textContent = item.name;
element.querySelector('.element__photo').src = item.link;
//лайки
//element.querySelector('.element__like').addEventListener('click', function (evt) {
 // evt.target.classList.toggle('element__like_active');
 // });

//открываем большую картинку
element.querySelector('.element__photo').addEventListener('click', function (evt) {
  evt.target.closest('.element__footer');
    x.classList.add('x_opened');
    b.src = this.src;
    subtitlePhoto.textContent = evt.target.closest('.element__footer').textContent;

});

elementsContainer.append(element);

});


//попап фотокарточки
const x = document.querySelector('.x');
const xo = document.querySelector('.xo');
const photoElement = document.querySelector('.element__photo');




//попап фотокарточки

//попап добавления карточки
const popupAddCard = document.querySelector('.popup_type_new-card');
const titleName = document.getElementsByName('title-name');
const photoLink = document.getElementsByName('photo-link');
const addCard = document.querySelector('.profile__add-button');

//Открытие попапа
function addCardPopupOpened() {
  popupAddCard.classList.add('popup_opened');
}

//отправка формы добавления карточки
function submitNewCard(evt) {
  evt.preventDefault();
  const element = elementTemplate.cloneNode(true);
  element.querySelector('.element__subtitle').textContent = titleName[0].value;
  element.querySelector('.element__photo').src = photoLink[0].value;
  element.querySelector('.element__photo').addEventListener('click', function (evt) {
evt.target.closest('.element__photo');
      x.classList.add('x_opened');
      b.src = this.src;
      subtitlePhoto.textContent = this.closest('.element__photo').textContent;

  });
  element.querySelector('.element__like').addEventListener('click', function (evt) {
  evt.target.classList.toggle('element__like_active');
  });
  elementsContainer.prepend(element);
}


addCard.addEventListener('click', addCardPopupOpened);
popupAddCard.addEventListener('submit', submitNewCard);

//попап добавления карточки





// Конец проекта 5
*/
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
