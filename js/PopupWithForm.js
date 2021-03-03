import { Popup } from './Popup.js';
export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;

  }

  //_getInputValues() {

  //}

  close() {
    super.close();
  }
  setEventListeners() {
    super.setEventListeners();
    const profileFormForm = this._popupSelector.querySelector('.popup__form');
    profileFormForm.addEventListener('submit', this._handleFormSubmit);
  }

}
