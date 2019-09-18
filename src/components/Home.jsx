import React, { useContext } from 'react';
import { GameCtx } from '../context/Moplus.context';
import { Button, Box, Heading } from 'grommet';
import { Gamepad } from 'grommet-icons';
import LettersRange from './LettersRange';

function getStupidAnswers(difficulty) {
  switch (difficulty) {
    case 5:
      return `Easy Peasy`;
    case 6:
      return `Un peu plus dur`;
    case 7:
      return `Là on discute`;
    case 8:
      return `Tu vas en chier`;
    case 9:
      return `T'es un grand malade`;
    default:
      return `Easy`;
  }
}

const Home = ({ toggleGamePanel }) => {
  const { wordLength, setWordLength, setGamesProps, initGame } = useContext(GameCtx);
  const startNewGame = (length) => {
    toggleGamePanel((state) => !state);
    setGamesProps(() => initGame(wordLength));
  };
  return (
    <Box flex align="center" justify="center" margin="medium" gap="xlarge">
      <LettersRange wordLength={wordLength} setWordLength={setWordLength} />
      <Button
        label={
          <Heading margin="none" level={3}>
            {getStupidAnswers(wordLength)}
          </Heading>
        }
        size="large"
        icon={<Gamepad />}
        onClick={() => startNewGame(wordLength)}
      />
    </Box>
  );
};

export default Home;
