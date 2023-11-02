import { Box, IconButton } from '@mui/material';

import { useDarkMode } from 'src/theme/DarkModeContext';

function DarkModeToggle() {
  const { isDarkMode, toggleMode } = useDarkMode();
  const imagePath = isDarkMode ? '/assets/icons/ic_sun.svg' : '/assets/icons/ic_moon.svg';
  return (
    <div>
      <IconButton onClick={toggleMode}>
        <Box component="img" alt="dark-mode" src={imagePath} sx={{ width: 28 }} />
      </IconButton>
    </div>
  );
}

export default DarkModeToggle;
