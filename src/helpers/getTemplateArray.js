import { UNKNOWN_CHAR, UNKNOWN } from './settings';

function getTemplateArray(row = 6, column = 5) {
  const letter = UNKNOWN_CHAR;
  const placement = UNKNOWN;
  return [...Array(row)].map((e) => Array(column).fill({ letter, placement }));
}
export default getTemplateArray;
