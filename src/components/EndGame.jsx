import React, { useContext } from 'react';
import { GameCtx } from '../context/Moplus.context';
import { WRONG, PERFECT } from '../helpers/settings';
import { Box, Heading } from 'grommet';
import WikiDefinition from './WikiDefinition';

const FireEndGame = () => {
  const { gameProps } = useContext(GameCtx);
  const { attempt, solution, lastWord } = gameProps;
  const isWon = solution.includes(lastWord);
  return (
    <Box border={{ color: 'brand', size: 'large' }} round="small" pad="medium" elevation="large">
      <Heading level={1} alignSelf="center" color={isWon ? PERFECT : WRONG}>
        {isWon ? 'GAGNÉ' : 'PERDU'}
      </Heading>
      <Heading level={3}>{!isWon && `La solution était ${solution}`}</Heading>
      <Heading level={4}>
        {isWon
          ? `Bien joué !! Tu as réussi en ${attempt} essai${attempt > 1 ? 's' : ''}...`
          : `Dommage :( ${lastWord} était proche...`}
      </Heading>
      <WikiDefinition word={solution} />
    </Box>
  );
};

export default FireEndGame;
