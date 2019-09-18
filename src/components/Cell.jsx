import React, { useEffect, useState, useContext } from 'react';
import { UNKNOWN_CHAR, CURRENT, NEXT, OLD } from '../helpers/settings';
import { GameCtx } from '../context/Moplus.context';
import { useSpring, animated } from 'react-spring';
import { Box, Heading } from 'grommet';

const Cell = ({ letter, placement, rowIndex }) => {
  const { gameProps } = useContext(GameCtx);
  const { attempt } = gameProps;
  const [cellType, setCellType] = useState(NEXT);
  useEffect(() => {
    if (rowIndex <= attempt) {
      setCellType(CURRENT);
    }
    if (rowIndex < attempt - 1) {
      setCellType(OLD);
    }
  }, [letter, rowIndex, attempt]);
  const props = useSpring({ opacity: cellType === CURRENT ? 1 : 0.5 });
  return (
    <animated.div style={props}>
      <Box
        responsive
        round="xsmall"
        height="4rem"
        width="4rem"
        elevation={cellType === CURRENT ? 'medium' : 'none'}
        border={{ color: placement, size: 'medium' }}
        background={'white'}
      >
        <Heading alignSelf="center" margin="small" level={2}>
          {letter === UNKNOWN_CHAR ? ' ' : letter.toUpperCase()}
        </Heading>
      </Box>
    </animated.div>
  );
};

export default Cell;
