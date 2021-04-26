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
  let sum = 0;
  for (let i = 0; i < guesses.length; i++) {

    if(!word.includes(guesses[i])){
       sum++;
    }
  }
  return sum >= 7;
}



module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};