/*
 * @param {HTMLElement} activeButton - the button that should be active
 * @param {HTMLElement[]} buttons - an array of all buttons that are mutually exclusive
 */
export function setActiveButton(activeBtn, buttons) {
  buttons.forEach((btn) => btn.classList.remove('active'));
  activeBtn.classList.add('active');

  function handleOutsideClick(event) {
    const clickedInside = buttons.some((btn) => btn.contains(event.target));

    if (!clickedInside) {
      buttons.forEach((btn) => btn.classList.remove('active'));
      document.removeEventListener('click', handleOutsideClick);
    }
  }

  setTimeout(() => {
    document.addEventListener('click', handleOutsideClick);
  }, 0);
}

export function addClickEffect(button) {
  button.classList.add('click-effect');
  setTimeout(() => button.classList.remove('click-effect'), 100);
}
