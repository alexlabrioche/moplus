import React from 'react';
import { Grommet, ResponsiveContext } from 'grommet';

const theme = {
  global: {
    colors: {
      brand: '#0041DB',
      darkBg: '#0030A0',
      DEFAULT: '#E3F0F7',
      UNKNOWN: '#A8B2B7',
      PERFECT: '#63AA6C',
      GOOD: '#EDAE49',
      WRONG: '#E85353',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
  heading: {
    extend: "font-family: 'B612 Mono', monospace",
  },
};

const ThemeProvider = ({ children }) => {
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>{children}</ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default ThemeProvider;
