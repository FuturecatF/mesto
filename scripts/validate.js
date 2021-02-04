const selectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};

const showInputError = (formElement, inputElement, errorMessage, selectors) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(selectors.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(selectors.errorClass);
};

const hideInputError = (formElement, inputElement, selectors) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(selectors.inputErrorClass);
  errorElement.classList.remove(selectors.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, selectors) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, selectors);
  } else {
    hideInputError(formElement, inputElement, selectors);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    if (!inputElement.validity.valid) {
      return true;
    }

  });
};

const toggleButtonState = (inputList, buttonElement, selectors) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(selectors.inactiveButtonClass);
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove(selectors.inactiveButtonClass);
    buttonElement.removeAttribute("disabled", true);
  }
};

const setEventListeners = (formElement, selectors) => {
  const inputList = Array.from(formElement.querySelectorAll(selectors.inputSelector));
  const buttonElement = formElement.querySelector(selectors.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, selectors);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, selectors);
      toggleButtonState(inputList, buttonElement, selectors);
    });
  });
};

const enableValidation = (selectors) => {
  const formList = Array.from(document.querySelectorAll(selectors.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, selectors);
  });

};

enableValidation(selectors);
