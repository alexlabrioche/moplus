import React, { useContext } from 'react';
import { AppCtx } from '../context/App.context';
import { Box } from 'grommet';

import Home from '../components/Home';
import InGame from '../components/InGame';
import AppBar from '../components/AppBar';
import Sidebar from '../components/Sidebar';

const AppComponent = ({ size }) => {
  const { showGamePanel, toggleGamePanel } = useContext(AppCtx);
  return (
    <Box fill>
      <AppBar />
      <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
        {showGamePanel ? <InGame /> : <Home toggleGamePanel={toggleGamePanel} />}
        <Sidebar size={size} />
      </Box>
    </Box>
  );
};

export default AppComponent;
