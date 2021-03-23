import { Popup } from '../components/Popup.js';

export class PopupWithSubmit extends Popup {
  constructor(popupSelector) {
      super(popupSelector);
  }

  setEventListeners() {
      super.setEventListeners();
      this._popupSelector.addEventListener('submit', (evt) => {
          evt.preventDefault();
          this._handleFormSubmit();
      });
  }

  handleDeleteCard(handleDelete) {
      this._formSubmit = handleDelete;
  }
}
