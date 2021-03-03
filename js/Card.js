export class Card {
  constructor({ data, handleCardClick }, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._subtitleElement = this._element.querySelector('.element__subtitle');
    this._photoElement = this._element.querySelector('.element__photo');
    this._likeElement = this._element.querySelector('.element__like');
    this._deleteButton = this._element.querySelector('.element__delete-icon');
    this._setEventListeners();
    this._photoElement.src = this._link;
    this._subtitleElement.textContent = this._name;
    this._photoElement.alt = this._name;

    return this._element;

  }

  _likeCard() {
    this.classList.toggle('element__like_active');
  }

  _deleteCard() {
    this.closest('.element').remove();
  }

  _setEventListeners() {
    this._deleteButton.addEventListener('click', this._deleteCard);
    this._likeElement.addEventListener('click', this._likeCard);
    this._photoElement.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
  });
  }
}
