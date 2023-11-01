import { IconButton } from '@mui/material';

import { useDarkMode } from 'src/theme/DarkModeContext';

import SvgColor from 'src/components/svg-color';

function DarkModeToggle() {
  const { isDarkMode, toggleMode } = useDarkMode();
  return (
    <div>
      <IconButton onClick={toggleMode}>
        <SvgColor
          src={`../../../../public/assets/icons/navbar/${isDarkMode ? 'sun' : 'moon'}.svg`}
        />
      </IconButton>
    </div>
  );
}

export default DarkModeToggle;
