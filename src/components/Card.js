export class Card {
  constructor({ data, handleCardClick, handleDeleteClick, handleLike }, cardSelector, userId) {
    this._name = data.name;
    this._link = data.link;
    this._like = data.likes;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLike = handleLike;
    this._cardId = data._id;
    this._userId = userId;
    this._ownersId = data.owner._id;
    //console.log(this._like);
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
    this._countLikes = this._element.querySelector('.element__count-likes');
    this._setEventListeners();
    this._photoElement.src = this._link;
    this._subtitleElement.textContent = this._name;
    this._photoElement.alt = this._name;
    this._countLikes.textContent = this._like.length;


    this._like.some(item => {
      if (item._id === this._userId) {
        this._likeElement.classList.add('element__like_active');
      }
    });


    if (this._ownersId !== this._userId) {
      this._deleteButton.setAttribute('style', 'display: none');
    }

    return this._element;
  }



  isLiked() {
    if (this._likeElement.classList.contains('element__like_active')) {
      return true;
    } else {
      return false;
    }
  }


  likeCard(element, data) {
    element.querySelector('.element__like').classList.toggle('element__like_active');
    this._countLikes.textContent = data.likes.length;
  }

  _setEventListeners() {
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteClick(this._cardId, this._element)
    });
    this._likeElement.addEventListener('click', () => {
      this._handleLike(this._cardId, this._element, this.isLiked())
    });
    this._photoElement.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}
