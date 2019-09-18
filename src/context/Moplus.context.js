import React, { createContext, useState } from 'react';
import getWord from '../helpers/getWord';
import { UNKNOWN_CHAR, LENGTH, CHANCES, PERFECT } from '../helpers/settings';
import removeDiacritics from '../helpers/removeDiacritics';
import getTemplateArray from '../helpers/getTemplateArray';

function initGame(length) {
  console.info('initGame');
  const solution = getWord(length);
  const normalized = removeDiacritics(solution);
  const rangeArr = Array.from(new Array(CHANCES), (x, i) => i);
  const defaultDisplay = UNKNOWN_CHAR.repeat(length);
  const lastWord = solution.charAt(0) + defaultDisplay.slice(1, length);
  let template = getTemplateArray();
  template[0][0] = { letter: solution.charAt(0), placement: PERFECT };
  return {
    chances: CHANCES,
    length,
    rangeArr,
    attempt: 0,
    solution,
    solutionV2: { raw: solution, normalized },
    defaultDisplay,
    template,
    lastWord,
  };
}

const GameCtx = createContext();

const GameProvider = ({ children }) => {
  const [wordLength, setWordLength] = useState(LENGTH);
  const [gameProps, setGamesProps] = useState(() => initGame(wordLength));
  console.info('___PROPS___', gameProps);
  return (
    <GameCtx.Provider
      value={{
        gameProps,
        setGamesProps,
        wordLength,
        setWordLength,
        initGame,
      }}
    >
      {children}
    </GameCtx.Provider>
  );
};

export { GameProvider as default, GameCtx };
