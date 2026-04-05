const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', function () {
  const name = nameInput.value.trim();

  if (name === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = name;
  }
});

// --- adding reset-button --- //

// const nameInput = document.querySelector('#name-input');
// const nameOutput = document.querySelector('#name-output');
// const resetButton = document.querySelector('#reset-button');

// nameInput.addEventListener('input', function() {
//   const name = nameInput.value.trim();

//   if (name === '') {
//     nameOutput.textContent = 'Anonymous';
//   } else {
//     nameOutput.textContent = name;
//   }
// });

// resetButton.addEventListener('click', function() {
//   nameInput.value = '';
//   nameOutput.textContent = 'Anonymous';
// });

// to be added in html:

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <button id="reset-button">Reset</button>
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>
