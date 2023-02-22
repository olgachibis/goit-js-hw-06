const inputEl = document.querySelector(`#validation-input`);
inputEl.addEventListener(`blur`, testBlur);
function testBlur(event) {
  const newInput = event.currentTarget;
  const inputLength = Number(newInput.dataset.length);
  if (newInput.value.length === inputLength) {
    newInput.classList.remove(`invalid`);
    newInput.classList.add(`valid`);
  } else {
    newInput.classList.remove(`valid`);
    newInput.classList.add(`invalid`);
  }
  
}