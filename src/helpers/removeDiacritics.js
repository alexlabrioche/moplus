function removeDiacritics(str) {
  const res = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return res;
}
export default removeDiacritics;
