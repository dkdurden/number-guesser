// UI variables
const cardBodyUI = document.querySelector('.card__body');
const formUI = document.querySelector('form');
const inputUI = document.querySelector('#num-input');
const submitBtnUI = document.querySelector('.btn');
const minNumUI = document.querySelector('#min-num');
const maxNumUI = document.querySelector('#max-num');

const MIN = 1;
const MAX = 10;

let triesLeft = 3,
  playAgain = false,
  correctNumber = generateNumber(MIN, MAX);

minNumUI.textContent = MIN;
maxNumUI.textContent = MAX;
inputUI.setAttribute('min', MIN);
inputUI.setAttribute('max', MAX);
formUI.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const guess = inputUI.value;

  if (playAgain) {
    resetGame();
    return;
  }

  if (parseInt(guess) === correctNumber) {
    clearAlert();

    inputUI.style.borderColor = 'green';

    const message = 'Correct! Click the button to play again.';
    const className = 'success';

    showAlert(message, className);

    endGame();
  } else {
    triesLeft--;
    inputUI.style.borderColor = 'red';
    handleIncorrectGuess();
  }
}

function showAlert(message, className) {
  const msg = document.createElement('p');
  msg.appendChild(document.createTextNode(message));
  msg.id = 'alert';
  msg.className = className;

  cardBodyUI.insertBefore(msg, formUI);
}

function clearAlert() {
  const msg = document.querySelector('#alert');
  if (msg) msg.remove();
}

function handleIncorrectGuess() {
  if (triesLeft === 0) {
    clearAlert();

    const message = `Sorry, but you are out of tries. The winning number was ${correctNumber}.`;
    const className = 'danger';

    showAlert(message, className);

    endGame();
  } else {
    clearAlert();

    formUI.reset();

    const message = `Sorry, but that's incorrect. ${`${triesLeft} ${
      triesLeft === 1 ? 'try' : 'tries'
    }`} remaining.`;
    const className = 'danger';

    showAlert(message, className);
  }
}

function resetGame() {
  clearAlert();

  formUI.reset();
  inputUI.disabled = false;
  inputUI.style.borderColor = 'initial';
  submitBtnUI.value = 'Submit';

  correctNumber = generateNumber(MIN, MAX);
  triesLeft = 3;
  playAgain = false;
}

function endGame() {
  inputUI.disabled = true;
  submitBtnUI.value = 'Play Again';
  playAgain = true;
}

function generateNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
