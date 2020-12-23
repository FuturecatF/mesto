let popup = document.querySelector('.popup');
let popupForm = popup.querySelector('.popup__form');
let popupButton = popupForm.querySelector('.popup__button');
let popupClose = popup.querySelector('.popup__close');
let profileName = document.getElementsByName('profileName');
let profileJob = document.getElementsByName('profileJob');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let editButton = document.querySelector('.profile__edit-button');
let likeButtons = document.querySelectorAll('.element__like');
popupButton.setAttribute('disabled', 'вжух'); // чтобы нельзя было вызвать попап через просмотр кода и сохранить пустые инпуты

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

for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener('click', function () {
    if (!likeButtons[i].classList.contains('element__like_active')) {
      likeButtons[i].classList.add('element__like_active');
    } else { likeButtons[i].classList.remove('element__like_active'); }
  });
}

editButton.addEventListener('click', togglePopup);
popupClose.addEventListener('click', togglePopup);
popupForm.addEventListener('submit', handleFormSubmit);
popupForm.addEventListener('input', checkRegexInput);
