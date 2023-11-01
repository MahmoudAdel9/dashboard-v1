/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { useContext, createContext } from 'react';

import { useLocalStorageState } from '../hooks/useLocalStorageState';

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  // window.matchMedia("(prefers-color-scheme: dark)").matches => for get the dark/light mode from the user operating system
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia('(prefers-color-scheme: dark)').matches,
    'dark-mode'
  );

  const toggleMode = () => {
    setIsDarkMode((currentMode) => !currentMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context) throw new Error('Calling useDarkMode Outside DarkModeProvider');
  return context;
}

export { useDarkMode, DarkModeProvider };

DarkModeContext.propTypes = {
  children: PropTypes.node,
};
