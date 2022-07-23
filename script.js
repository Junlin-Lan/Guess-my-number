'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highestScore = 0;
console.log(secretNumber, typeof secretNumber);
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // when there is no input
    if (!guess || guess > 20 || guess < 0) {
        document.querySelector('.message').textContent = '⛔ Please input a number between 1 - 20.';

        //when guess is too high or too low
    } else if (guess !== secretNumber && score > 1) {
        document.querySelector('.message').textContent = guess > secretNumber ? 'Too high.' : 'Too low.';
        score--
        document.querySelector('.score').textContent = score;


        // when player wins
    } else if (guess === secretNumber && score > 1) {
        document.querySelector('.message').textContent = '🎉Correct Number! Click "Again" to start a new round.';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highestScore) {
            highestScore = score;
            document.querySelector('.highscore').textContent = highestScore;
        }
        // when lost
    } else {
        document.querySelector('.message').textContent = 'You lost';
    }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
});