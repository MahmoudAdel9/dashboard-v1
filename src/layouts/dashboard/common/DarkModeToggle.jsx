import { IconButton } from '@mui/material';

import { useDarkMode } from 'src/theme/DarkModeContext';

function DarkModeToggle() {
  const { isDarkMode, toggleMode } = useDarkMode();
  return (
    <div>
      {isDarkMode ? (
        <IconButton onClick={toggleMode}>
          <img src="/assets/icons/ic_sun.svg" alt="light-mode-icon" width={25} height={25} />
        </IconButton>
      ) : (
        <IconButton onClick={toggleMode}>
          <img src="/assets/icons/ic_moon.svg" alt="dark-mode-icon" width={25} height={25} />
        </IconButton>
      )}
    </div>
  );
}

export default DarkModeToggle;
