function countCharacters(str) {
  return str.split('').reduce((obj, s) => {
    obj[s] = (obj[s] || 0) + 1;
    return obj;
  }, {});
}
export default countCharacters;
