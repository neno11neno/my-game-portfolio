import { createContext, useState, useContext } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { redWhiteTheme, blueBlackTheme } from './theme';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isRedWhite, setIsRedWhite] = useState(true);

  const toggleTheme = () => setIsRedWhite(!isRedWhite);

  return (
    <ThemeContext.Provider value={{ toggleTheme, isRedWhite }}>
      <StyledProvider theme={isRedWhite ? redWhiteTheme : blueBlackTheme}>
        {children}
      </StyledProvider>
    </ThemeContext.Provider>
  );
};
