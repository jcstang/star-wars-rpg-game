function handleWinninScenario() {
  if (isWinningState()) {
    wins++;
    alert('You win!');

    resetGame();
  }
}

function handleLosingScenario() {
  if (isLosingState()) {
    losses++;
    alert('Bad news! You lost.');
    resetGame();
  }
}

function resetGame() {
  guessedLetters = [];
  wrongLetters = [];

  selectedMovie = '';
  movieBlanks = [];

  setMovie();
  updateDisplay(null);
}

function isWinningState() {
  return movieBlanks.join('') === selectedMovie.toUpperCase();
}

function isLosingState() {
  return wrongLetters.length >= maxGuesses;
}