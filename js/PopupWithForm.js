import { Popup } from './Popup.js';
export class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    const allInputs = Array.from(this._popupSelector.querySelectorAll('.popup__input'));
    const inputList = {};
    allInputs.forEach((input) => {
      inputList[input.name] = input.value;
        });
        return inputList;
  }

  close() {
    super.close();
  }
  setEventListeners() {
    super.setEventListeners();
    const profileFormForm = this._popupSelector.querySelector('.popup__form');
    profileFormForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

}
