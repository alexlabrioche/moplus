import React, { useState, useContext } from 'react';
import { GameCtx } from '../context/Moplus.context';
import { TextInput, Text, Heading, Button, Form, Box } from 'grommet';
import { Sign } from 'grommet-icons';

const Input = ({ onSubmit, firstLetter }) => {
  const { gameProps } = useContext(GameCtx);
  const { length, chances, attempt, solution } = gameProps;
  const [{ isTooLong, wrongLetter }, setError] = useState({
    isTooLong: false,
    wrongLetter: false,
    message: '',
  });
  const [value, setValue] = useState(solution.charAt(0));
  function handleValue(e) {
    const value = e.target.value.toLowerCase();
    if (value.charAt(0) !== solution.charAt(0)) {
      setError({ wrongLetter: true });
      setTimeout(() => {
        setError({ wrongLetter: false });
      }, 1500);
    }
    if (value.length > length) {
      setError({ isTooLong: true });
      setTimeout(() => {
        setError({ isTooLong: false });
      }, 1500);
    }
    if (value.length <= length && value.charAt(0) === solution.charAt(0)) {
      return setValue(value);
    }
  }
  return (
    <Form
      style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
      onSubmit={() => setValue('')}
    >
      <Box direction="row" pad="medium" gap="medium">
        <TextInput
          size="xxlarge"
          placeholder={`tape ton mot`}
          value={value}
          onChange={(event) => handleValue(event)}
        />
        <Button
          type="submit"
          alignSelf="center"
          size="large"
          primary
          disabled={value.length < length || isTooLong}
          label={<Text size="xlarge">Go</Text>}
          icon={<Sign />}
          onClick={() => onSubmit(value)}
        />
      </Box>
      <Heading
        style={{ height: '2rem', color: isTooLong || wrongLetter ? 'orangered' : 'green' }}
        alignSelf="center"
        level={4}
      >
        {isTooLong || wrongLetter ? '' : `Il te reste ${chances - attempt} essais`}
        {isTooLong && `${length} lettres maximum`}
        {wrongLetter && `La première lettre doit être un ${solution.charAt(0).toUpperCase()}`}
      </Heading>
    </Form>
  );
};

export default Input;
