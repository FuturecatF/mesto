export function requestLoading (button, isLoading, text) {
  if (isLoading) {
      button.setAttribute('disabled', true)
      button.textContent = text;
  } else {
      button.removeAttribute('disabled')
      button.textContent = text;
  }
}
