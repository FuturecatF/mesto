import { Popup } from '../components/Popup.js';
export class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._allInputs = Array.from(this._form.querySelectorAll('.popup__input'));
  }

  _getInputValues() {
    const inputList = {};
    this._allInputs.forEach((input) => {
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
