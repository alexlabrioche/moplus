import React from 'react';
import GameProvider from '../context/Moplus.context';
import AppProvider from '../context/App.context';
import ThemeProvider from './App.themeprovider';

import AppComponent from './App.component';

function App() {
  return (
    <AppProvider>
      <GameProvider>
        <ThemeProvider>{(size) => <AppComponent size={size} />}</ThemeProvider>
      </GameProvider>
    </AppProvider>
  );
}

export default App;
