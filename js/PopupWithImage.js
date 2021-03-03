import { Popup } from './Popup.js';
import { photoItem, subtitlePhoto } from './index.js'
export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  open(name, link) {

    photoItem.src = link;
    subtitlePhoto.textContent = name;
    photoItem.alt = name;
    super.open();
  }

  //переопределил setEventListeners, кнопка закрытия формы и попапа с картинкой разные.
  setEventListeners() {
    const closeButton = this._popupSelector.querySelector('.photo__close');
    closeButton.addEventListener('click', () => this.close());
    this._popupSelector.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close();
      }
    });
  }
}
