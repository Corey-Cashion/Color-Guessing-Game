const COLORS_ARRAY = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'];

function runGame() {
  let guess = '';
  let correct = false;
  const targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length);
  const target = COLORS_ARRAY[targetIndex];
  let numTries = 0; // Initialize the number of tries here
  // console.log(target); // uncomment to see the target color in the console

  do {
    guess = prompt(`I am thinking of one of these colors:\n\n${COLORS_ARRAY.join(', ')}\n\nWhat color am I thinking of?\n`);

    if (guess === null) {
      alert('You canceled the game.');
      return;
    }

    correct = checkGuess(guess, target);
    numTries++; // Increment the number of tries for each guess
  } while (!correct);

  alert(`Congratulations! You guessed the correct color: ${target}!\n\nTotal number of guesses: ${numTries}`);
  document.body.style.background = guess;
}

function checkGuess(guess, target) {
  let correct = false;

  if (!COLORS_ARRAY.includes(guess)) {
    alert('That is not a valid color.');
  } else if (guess > target) {
    alert('Your guess is alphabetically higher than the correct color.');
  } else if (guess < target) {
    alert('Your guess is alphabetically lower than the correct color.');
  } else {
    correct = true;
  }

  return correct;
}