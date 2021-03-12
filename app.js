let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  let guess = +document.querySelector('.guess').value;
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!!!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Guess ✨';
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too High...';
    if (score > 1) updateScore();
    else {
      document.querySelector('.message').textContent = 'Lost ...';
    }
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low...';
    if (score > 1) updateScore();
    else {
      document.querySelector('.message').textContent = 'Lost ...';
    }
  }
});

function updateScore() {
  score--;
  document.querySelector('.score').textContent = score;
}

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.highscore').textContent = highScore;
  document.body.style.backgroundColor = '#222';
});
