import React, { useState, useContext, useEffect } from 'react';
import { GameCtx } from '../context/Moplus.context';
import { AppCtx } from '../context/App.context';
import getLettersPlacement from '../helpers/getLettersPlacement';
import UserInput from './UserInput';
import EndGame from './EndGame';
import Row from './Row';
import { Box } from 'grommet';

const Home = () => {
  const [showEndGame, toggleEndGame] = useState(false);
  const { gameProps, setGamesProps } = useContext(GameCtx);
  const { toggleSideBar } = useContext(AppCtx);
  const { solution, attempt, template, chances } = gameProps;
  function fireNewWord(value) {
    console.info('__fireNewWord__', value);
    toggleSideBar(false);
    if (value === solution || attempt === chances - 1) {
      toggleEndGame(true);
    }
    const placement = getLettersPlacement(solution, value);
    template[attempt] = placement;
    setGamesProps({
      ...gameProps,
      template,
      attempt: attempt + 1,
      lastWord: value,
    });
  }
  return (
    <Box flex align="center" justify="center" margin="small">
      {showEndGame ? (
        <EndGame />
      ) : (
        <>
          {template.map((row, i) => {
            return <Row key={i * 10} row={row} rowIndex={i} />;
          })}
          <UserInput onSubmit={fireNewWord} />
        </>
      )}
    </Box>
  );
};

export default Home;
