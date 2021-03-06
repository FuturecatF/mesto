import { Popup } from './Popup.js';
export class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupSelector.querySelector('.popup__form');
  }

  _getInputValues() {
    const allInputs = Array.from(this._form.querySelectorAll('.popup__input'));
    const inputList = {};
    allInputs.forEach((input) => {
      inputList[input.name] = input.value;
    });
    return inputList;
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

}
