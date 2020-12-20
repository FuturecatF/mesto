let popup = document.querySelector('.popup');
let popupForm = popup.querySelector('.popup__form');
let popupName = popupForm.querySelector('.popup__name');
let popupJob = popupForm.querySelector('.popup__job');
let popupButton = popupForm.querySelector('.popup__button');
let popupClose = popup.querySelector('.popup__close');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let editButton = document.querySelector('.profile__edit-button');
let likeButtons = document.querySelectorAll('.element__like');
popupButton.setAttribute('disabled', 'вжух'); // чтобы нельзя было вызвать попап через просмотр кода и сохранить пустые инпуты

function togglePopup() {
  popup.classList.toggle('popup-toggle');
  takeInputValue();
  popupButton.setAttribute('disabled', 'вжух');
  popupButton.classList.remove('popup__button_active');
}

function takeInputValue() {
  popupName.value = profileTitle.textContent;
  popupJob.value = profileSubtitle.textContent;
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupName.value;
  profileSubtitle.textContent = popupJob.value;
  togglePopup();
}

function CheckRegexInput() {
  let regexp = /^([^\-_\s][A-Za-zА-Яа-яЁё\s_-]{1,45}[^\-_\s])$/i;
  if (regexp.test(popupName.value) === true && regexp.test(popupJob.value) === true) {
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
popupForm.addEventListener('input', CheckRegexInput);
