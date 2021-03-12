let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

function updateScore() {
  score--;
  document.querySelector('.score').textContent = score;
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function displayNumber(number) {
  document.querySelector('.number').textContent = number;
}

function displayNumberStyleWidth(width) {
  document.querySelector('.number').style.width = width;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;
  if (!guess || guess < 0) {
    displayMessage('Enter numbers between 1 and 20');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Guess ✨');
    document.body.style.backgroundColor = '#60b347';
    displayNumber(secretNumber);
    displayNumberStyleWidth('30rem');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      updateScore();
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  displayNumber('?');
  displayNumberStyleWidth('15rem');
  document.querySelector('.highscore').textContent = highScore;
  document.body.style.backgroundColor = '#222';
});

function updateScore() {
  score--;
  document.querySelector('.score').textContent = score;
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function displayNumber(number) {
  document.querySelector('.number').textContent = number;
}

function displayNumberStyleWidth(width) {
  document.querySelector('.number').style.width = width;
}
