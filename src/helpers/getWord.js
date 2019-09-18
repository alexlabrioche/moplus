import five from './generated/5.json';
import six from './generated/6.json';
import seven from './generated/7.json';
import height from './generated/8.json';
import nine from './generated/9.json';

function getWord(wordLength) {
  switch (wordLength) {
    case 5:
      const rdm5 = Math.floor(Math.random() * five.length);
      return five[rdm5];
    case 6:
      const rdm6 = Math.floor(Math.random() * six.length);
      return six[rdm6];
    case 7:
      const rdm7 = Math.floor(Math.random() * seven.length);
      return seven[rdm7];
    case 8:
      const rdm8 = Math.floor(Math.random() * height.length);
      return height[rdm8];
    case 9:
      const rdm9 = Math.floor(Math.random() * nine.length);
      return nine[rdm9];
    default:
      return 'La longueur du mot doit etre comprise en 5 et 9';
  }
}
export default getWord;
