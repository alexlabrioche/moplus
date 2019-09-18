import React, { createContext, useState } from 'react';

const AppCtx = createContext();

const AppProvider = ({ children }) => {
  const [showSidebar, toggleSideBar] = useState(false);
  const [showGamePanel, toggleGamePanel] = useState(false);
  return (
    <AppCtx.Provider value={{ showSidebar, toggleSideBar, showGamePanel, toggleGamePanel }}>
      {children}
    </AppCtx.Provider>
  );
};

export { AppProvider as default, AppCtx };
