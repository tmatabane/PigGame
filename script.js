'use strict';

const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceElement = document.querySelector('.dice');

let scores = [0, 0];
let playing = true;
let currentDice = 0;
let activePlayer = 0;
let score = document.getElementById(`score--${activePlayer}`);
let currentScore = document.getElementById(`current--${activePlayer}`);
let player = document.querySelector(`.player--${activePlayer}`);

score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

const switchPlayer = function () {
  currentDice = 0;
  player.classList.toggle('player--active');
  currentScore.textContent = currentDice;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player = document.querySelector(`.player--${activePlayer}`);
  player.classList.toggle('player--active');
   currentScore = document.getElementById(`current--${activePlayer}`);
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    
    let dice = Math.trunc(Math.random() * 6 + 1);
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;
    currentDice += dice;

    if (dice !== 1) {
      currentScore.textContent = currentDice;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    score = document.getElementById(`score--${activePlayer}`);
    currentDice += Number(score.textContent);
    if (currentDice >= 100) {
      score = document.getElementById(`score--${activePlayer}`);
      score.textContent = currentDice;
      playing = false;
      player.classList.add('player--winner');
    } else {
      score.textContent = currentDice;

      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  
  if (activePlayer == 0) {
    switchPlayer()
    switchPlayer()
  }
  else{
    switchPlayer()
    switchPlayer()
    switchPlayer()
  }
  player.classList.remove("player--winner");
  score = document.getElementById(`score--0`);
  score.textContent = 0;
  score = document.getElementById(`score--1`);
  score.textContent = 0;
  playing = true;
});
