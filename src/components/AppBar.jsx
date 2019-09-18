import React, { useContext } from 'react';
import { AppCtx } from '../context/App.context';
import { Box, Heading, Button, Anchor } from 'grommet';
import { Info } from 'grommet-icons';

const AppBar = () => {
  const { toggleSideBar, showSidebar, showGamePanel, toggleGamePanel } = useContext(AppCtx);
  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="brand"
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation="medium"
      style={{ zIndex: '1' }}
    >
      <Heading level="2" margin="none">
        <Anchor label="Moplus" onClick={() => toggleGamePanel(false)} />
      </Heading>
      <Button
        icon={<Info />}
        disabled={!showGamePanel}
        onClick={() => toggleSideBar(!showSidebar)}
      />
    </Box>
  );
};
export default AppBar;
