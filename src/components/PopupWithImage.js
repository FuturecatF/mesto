import { Popup } from '../components/Popup.js';
export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._photo = this._popupSelector.querySelector('.photo__item');
    this._subtitle = this._popupSelector.querySelector('.photo__subtitle');
  }

  open(name, link) {
    this._photo.src = link;
    this._subtitle.textContent = name;
    this._photo.alt = name;
    super.open();
  }
}
