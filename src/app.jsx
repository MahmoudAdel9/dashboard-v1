/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';
import { DarkModeProvider } from './theme/DarkModeContext';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    <DarkModeProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </DarkModeProvider>
  );
}
