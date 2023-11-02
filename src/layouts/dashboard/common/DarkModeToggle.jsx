import { Box, IconButton } from '@mui/material';

import { useDarkMode } from 'src/theme/DarkModeContext';

function DarkModeToggle() {
  const { isDarkMode, toggleMode } = useDarkMode();
  const imagePath = isDarkMode
    ? '/public/assets/icons/navbar/sun.svg'
    : '/public/assets/icons/navbar/moon.svg';
  return (
    <div>
      <IconButton onClick={toggleMode}>
        <Box component="img" alt="dark-mode" src={imagePath} sx={{ width: 25, height: 25 }} />
      </IconButton>
    </div>
  );
}

export default DarkModeToggle;
