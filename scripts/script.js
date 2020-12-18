let popup = document.querySelector('.popup');
let popupForm = popup.querySelector('.popup__form');
let popupName = popupForm.querySelector('.popup__name');
let popupJob = popupForm.querySelector('.popup__job');
let popupButton = popupForm.querySelector('.popup__button');
let popupClose = popup.querySelector('.popup__close');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let editButton = document.querySelector('.edit-button');
let likeButtons = document.querySelectorAll('.element__like');
popupButton.setAttribute('disabled', 'вжух');

function togglePopup() {
  popup.classList.toggle('popup-toggle');
  takePlaceholder();
  clearValue();
  popupButton.classList.remove('popup__button_btn_active');
}

function clearValue() {
  popupName.value = "";
  popupJob.value = "";
}

function takePlaceholder() {
  popupName.placeholder = profileTitle.textContent;
  popupJob.placeholder = profileSubtitle.textContent;
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  if (popupName.value.length > 0) {
    profileTitle.textContent = popupName.value;
  }
  if (popupJob.value.length > 0) {
    profileSubtitle.textContent = popupJob.value;
  }
  togglePopup();
}

function inputText() {
  popupButton.removeAttribute('disabled', 'вжух');
  popupButton.classList.add('popup__button_btn_active');
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
popupForm.addEventListener('input', inputText);



