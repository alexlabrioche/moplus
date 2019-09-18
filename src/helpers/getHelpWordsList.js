import five from './generated/5.json';

function getHelpWordsList(length, solution, attempt) {
  const lettersInCommon = solution
    .split('')
    .filter((letter, i) => letter === attempt[i])
    .join('');
  const filteredList = five.filter(
    (word) => word.slice(0, lettersInCommon.length) === lettersInCommon,
  );
  let randomHelpList = [];
  do {
    let rdm = Math.floor(Math.random() * Math.floor(filteredList.length));
    let word = filteredList[rdm];
    word !== solution && randomHelpList.push(word);
  } while (randomHelpList.length < 5);
  return randomHelpList;
}

export default getHelpWordsList;
