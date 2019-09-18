import React from 'react';
import { RangeInput, Box, Text, Heading } from 'grommet';
import { LENGTH, MAX_LENGTH } from '../helpers/settings';

const LettersRange = ({ wordLength, setWordLength }) => {
  return (
    <Box pad="medium" width="medium" alignContent="center">
      <Heading level={2} alignSelf="center">
        {wordLength} lettres!
      </Heading>
      <RangeInput
        min={LENGTH}
        max={MAX_LENGTH}
        value={wordLength}
        onChange={(e) => setWordLength(Number(e.target.value))}
      />
    </Box>
  );
};

export default LettersRange;
