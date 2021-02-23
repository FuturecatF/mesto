import { openBigImage } from './index.js';

export class Card {
  constructor(data, cardSelector, openBigImage) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    openBigImage;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content
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
    this._photoElement.addEventListener('click', openBigImage);
    this._likeElement.addEventListener('click', this._likeCard);
  }
}
