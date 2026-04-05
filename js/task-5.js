function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

button.addEventListener('click', function () {
  const color = getRandomHexColor();

  document.body.style.backgroundColor = color;
  colorSpan.textContent = color;
});

// explanations to getRandomHexColor
// Math.random() * 16777215 — generating a random number (16777215 = the total number of possible hex colors);
// .toString(16) — convertsing to hex format (e.g. "ff5733");
// .padStart(6, 0) — ensuring it always has 6 characters, padding with 0 if needed (e.g. "00ff33");
// resulting into e.g. "#ff5733"
