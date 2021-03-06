'use strict';

/*
document.querySelector(`.message`).textContent = `Hello There`;
document.querySelector(`.number`).textContent = `13`;
document.querySelector(`.score`).textContent = `10`;

console.log((document.querySelector(`.guess`).value = 23));
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess, secretNumber);

  // When user enters incorrect number

  if (!guess) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Invalid Number! ⛔`;
    }
  }

  // When user wins
  else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `Correct Number! 🎉`;
    document.querySelector(`body`).style.backgroundColor = `#0CB04A`;
    document.querySelector(`.number`).style.width = `30rem`;
    document.querySelector(`.number`).textContent = secretNumber;

    // When user enters a number that is higher or lower
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent =
        guess > secretNumber ? `Too high! 📈` : `Too low! 📉`;
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
  score = 20;
  document.querySelector(`.score`).textContent = 20;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
});
