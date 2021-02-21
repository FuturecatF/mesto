import { toogleModal, popupPhoto, photoItem, subtitlePhoto } from './index.js';

export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.element__photo').src = this._link;
    this._element.querySelector('.element__subtitle').textContent = this._name;
    this._element.querySelector('.element__photo').alt = this._name;

    return this._element;
  }

  _likeCard() {
    this.classList.toggle('element__like_active');
  }

  _deleteCard() {
    this.closest('.element').remove();
  }

  _openBigImage() {
    photoItem.src = this.src;
    subtitlePhoto.textContent = this.alt;
    photoItem.alt = this.alt;
    toogleModal(popupPhoto);
  }

  _setEventListeners() {
    this._element.querySelector('.element__delete-icon').addEventListener('click', this._deleteCard);
    this._element.querySelector('.element__photo').addEventListener('click', this._openBigImage);
    this._element.querySelector('.element__like').addEventListener('click', this._likeCard);
  }
}
