'use strict';

/*
document.querySelector(`.message`).textContent = `Hello There`;
document.querySelector(`.number`).textContent = `13`;
document.querySelector(`.score`).textContent = `10`;

console.log((document.querySelector(`.guess`).value = 23));
*/

const guess = Number(document.querySelector(`.guess`).value);
document.querySelector(`.check`).addEventListener(`click`, function () {
  if (!guess) {
    document.querySelector(`.message`).textContent = `Invalid Number!`;
  }
});
