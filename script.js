// UI variables
const cardBodyUI = document.querySelector('.card__body');
const formUI = document.querySelector('form');
const inputUI = document.querySelector('#num-input');
const submitBtnUI = document.querySelector('.btn');

let triesLeft = 1;
let playAgain = false;
const correctNumber = 5;

formUI.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  if (playAgain) window.location.reload();

  const guess = inputUI.value;

  // if guess is correct, display success message and change submit button to play again
  console.log(formUI);
  if (parseInt(guess) === correctNumber) {
    const msg = document.createElement('p');
    msg.appendChild(
      document.createTextNode('Correct! Click the button to play again.')
    );
    msg.className = 'success';

    cardBodyUI.insertBefore(msg, formUI);

    inputUI.disabled = true;

    submitBtnUI.value = 'Play Again';
    playAgain = true;
  }

  // if guess is not correct and there are no tries left, display error and change submit to play again

  // if guess is not correct and their are tries left, decrement triesLeft and display error

  //   triesLeft--;

  //   if (triesLeft === 0) {
  //     submitBtnUI.disabled = true;
  //     inputUI.disabled = true;
  //   }
}
