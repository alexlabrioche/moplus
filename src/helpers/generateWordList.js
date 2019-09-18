// Exec function avec Node pour générer les fichiers JSON statiques.
const fs = require('fs');
const wordListPath = require('french-wordlist');

function getList(wordLength) {
  const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');
  const regex = /(-)/g;
  const filtered = wordArray.filter((word) => word.length === wordLength && !word.match(regex));
  return filtered;
}

const nums = [5, 6, 7, 8, 9];
for (let i = 0; i < nums.length; i++) {
  const data = getList(nums[i]);
  fs.writeFile(`./generated/${nums[i]}.json`, JSON.stringify(data, undefined, 2), (err) => {
    if (err) throw err;
    console.log(`The file ${nums[i]}.json has been saved!`);
  });
}
// Exec function avec Node pour générer les fichiers JSON statiques.
