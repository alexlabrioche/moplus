import React, { useContext, useState, useEffect } from 'react';
import { AppCtx } from '../context/App.context';
import { GameCtx } from '../context/Moplus.context';
import { LENGTH } from '../helpers/settings';
import { Box, Collapsible, Layer, Button, Text } from 'grommet';
import { FormClose } from 'grommet-icons';
import getHelpWordsList from '../helpers/getHelpWordsList';

const Sidebar = ({ size }) => {
  const { showSidebar, toggleSideBar } = useContext(AppCtx);
  const { gameProps } = useContext(GameCtx);
  const { solution, lastWord } = gameProps;
  const [wordsList, setWordsList] = useState([]);
  useEffect(() => {
    if (solution !== lastWord) {
      return setWordsList(getHelpWordsList(LENGTH, solution, lastWord));
    }
    return setWordsList([]);
  }, [solution, lastWord]);
  return (
    <>
      {!showSidebar || size !== 'small' ? (
        <Collapsible direction="horizontal" open={showSidebar}>
          <Box
            flex
            width="medium"
            background="darkBg"
            elevation="large"
            align="center"
            justify="center"
          >
            {wordsList.length > 0 ? wordsList.map((word, i) => <Text key={i}>{word}</Text>) : '...'}
          </Box>
        </Collapsible>
      ) : (
        <Layer>
          <Box background="light-2" tag="header" justify="end" align="center" direction="row">
            <Button icon={<FormClose />} onClick={() => toggleSideBar(false)} />
          </Box>
          <Box fill background="light-2" align="center" justify="center">
            {wordsList.length > 0 ? wordsList.map((word, i) => <Text key={i}>{word}</Text>) : '...'}
          </Box>
        </Layer>
      )}
    </>
  );
};

export default Sidebar;
