import { useMemo } from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

// import { palette } from './palette';
import { shadows } from './shadows';
import { overrides } from './overrides';
import { typography } from './typography';
import { useDarkMode } from './DarkModeContext';
import { customShadows } from './custom-shadows';

// ----------------------------------------------------------------------

export default function ThemeProvider({ children }) {
  const { isDarkMode } = useDarkMode();
  // const mode = isDarkMode ? 'dark' : 'light';

  const memoizedValue = useMemo(
    () => ({
      palette: {
        mode: isDarkMode ? 'dark' : 'light',
      },
      // palette: palette(mode),
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
      shape: { borderRadius: 8 },
    }),
    [isDarkMode]
  );

  const theme = createTheme(memoizedValue);

  theme.components = overrides(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
