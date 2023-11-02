import { IconButton } from '@mui/material';

import { useDarkMode } from 'src/theme/DarkModeContext';

import SvgColor from 'src/components/svg-color';

function DarkModeToggle() {
  const { isDarkMode, toggleMode } = useDarkMode();
  const imagePath = isDarkMode
    ? '/public/assets/icons/navbar/sun.svg'
    : '/public/assets/icons/navbar/moon.svg';
  return (
    <div>
      <IconButton onClick={toggleMode}>
        <SvgColor src={imagePath} />
      </IconButton>
    </div>
  );
}

export default DarkModeToggle;
