export class Card {
  constructor({ data, handleCardClick, handleDeleteClick }, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._cardId = data._id;
    this._ownerId = '80d03f823c8d70109466c7c7';
    this._ownersId = data.owner._id;
    //console.log(data);

    //console.log(this._ownerId);
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

     if (this._ownerId !== this._ownersId) {
      this._deleteButton.setAttribute('style', 'display: none');
  }

    return this._element;
  }

  _likeCard() {
    this.classList.toggle('element__like_active');
  }

  deleteCard() {
    this.closest('.element').remove();
  }

  _setEventListeners() {
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteClick(this._cardId, this._element)
    });
    this._likeElement.addEventListener('click', this._likeCard);
    this._photoElement.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}
