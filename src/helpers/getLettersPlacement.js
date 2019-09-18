import { UNKNOWN_CHAR, WRONG, GOOD, PERFECT, UNKNOWN } from './settings';
import countCharacters from './countCharacters';
import removeDiacritics from './removeDiacritics';

function getLettersPlacement(solution, input) {
  const userInput = input.split('');
  const soluceArr = solution.split('');
  let solutionCharsObj = countCharacters(solution);
  let result = userInput.map((letter, i) => ({ letter, placement: '' }));
  userInput.forEach((letter, i) => {
    if (!soluceArr.includes(letter)) {
      if (letter === UNKNOWN_CHAR) {
        return (result[i].placement = UNKNOWN);
      }
      return (result[i].placement = WRONG);
    }
    if (soluceArr.includes(letter)) {
      if (letter !== soluceArr[i]) {
        if (solutionCharsObj[letter] > 0) {
          solutionCharsObj[letter]--;
          return (result[i].placement = GOOD);
        }
        return (result[i].placement = WRONG);
      }
      if (letter === soluceArr[i]) {
        if (solutionCharsObj[letter] > 0) {
          solutionCharsObj[letter]--;
          return (result[i].placement = PERFECT);
        }
        return (result[i].placement = WRONG);
      }
    }
  });
  return result;
}

export { getLettersPlacement as default };
