function displayWordSoFar(word, guesses) {

  let displayedWord = '';

  for (let i = 0; i < word.length; i++) {

    const isGuessed = guesses.includes(word[i]);

    if(isGuessed) {
      const toAdd = word[i] + ' ';
      displayedWord += toAdd;
    } else {
      displayedWord += '_ ';
    }
  }

  console.log('DISPLAYEDWORD: ', displayedWord)
  return displayedWord;

}

function isGameWon(word, guesses) {
  for (let i = 0; i < word.length; i++) {
    if(!guesses.includes(word[i])) {
      return false;
    }
    return true;
  }
}

function isGameLost(word, guesses) {
  // return true als er 7 letters zijn die niet overeenkomen in word
  // return false als er minder dan 7 letters niet overeenkomen met word
  // check of letter in word voorkomt; nee? ==> sum++
  // als sum++ === 7 ==> game is verloren ==> true

  // Define the length or 'word'
  for (let i = 0; i < word.length; i++) {
    // define variable that counts wrong letters
    let falseLetters = 0;
    let gameLost = false;
    // count false Letters to see if the game is lost
    if(!guesses.includes(word[i])) {
      falseLetters++;
    }
    // return true if Wrong guesses equals 7
    if(falseLetters === 7) {
      return gameLost = true;
    }
    return gameLost = false;
  }

}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};