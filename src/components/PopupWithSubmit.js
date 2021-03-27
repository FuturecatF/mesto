import { Popup } from '../components/Popup.js';

export class PopupWithSubmit extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  handleDeleteCard(handleDelete) {
    this._formSubmit = handleDelete;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formSubmit();
    });
  }
}
