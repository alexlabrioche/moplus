import React from 'react';
import { Button } from 'grommet';
import { Book } from 'grommet-icons';

const WikiDefinition = ({ word }) => {
  const wikiUrl = `https://fr.wiktionary.org/wiki/${word}`;
  return (
    <Button
      icon={<Book />}
      label={`Voir la définition du mot ${word}`}
      href={wikiUrl}
      target="blank"
    />
  );
};

export default WikiDefinition;
