'use strict';

/*
document.querySelector(`.message`).textContent = `Hello There`;
document.querySelector(`.number`).textContent = `13`;
document.querySelector(`.score`).textContent = `10`;

console.log((document.querySelector(`.guess`).value = 23));
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess, secretNumber);
  if (!guess) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Invalid Number! ⛔`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost! 😣`;
      document.querySelector(`.score`).textContent = 0;
    }
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `Correct Number! 🎉`;
    document.querySelector(`body`).style.backgroundColor = `#0CB04A`;
    document.querySelector(`.number`).style.width = `30rem`;
    document.querySelector(`.number`).textContent = secretNumber;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Too high! 📈`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost! 😣`;
      document.querySelector(`.score`).textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Too low! 📉`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost! 😣`;
      document.querySelector(`.score`).textContent = 0;
    }
  }
});
document.querySelector(`.again`).addEventListener(`click`, function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.score`).textContent = 20;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
});
