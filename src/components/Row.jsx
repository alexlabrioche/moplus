import React from 'react';
import { Box } from 'grommet';

import Cell from './Cell';

const Row = ({ row, rowIndex }) => {
  return (
    <Box direction="row" gap="small" margin="xsmall">
      {row.map((cell, i) => (
        <Cell
          key={i * 100}
          letter={cell.letter}
          placement={cell.placement}
          letterIndex={i}
          rowIndex={rowIndex}
        />
      ))}
    </Box>
  );
};

export default Row;
