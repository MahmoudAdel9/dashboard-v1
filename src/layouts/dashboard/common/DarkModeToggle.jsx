import { IconButton } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';

import { useDarkMode } from 'src/theme/DarkModeContext';

function DarkModeToggle() {
  const { isDarkMode, toggleMode } = useDarkMode();
  const imagePath = isDarkMode
    ? '../../../../public/assets/icons/navbar/sun.svg'
    : '../../../../public/assets/icons/navbar/moon.svg';
  return (
    <div>
      <IconButton onClick={toggleMode}>
        <img alt="dark-mode" src={imagePath} width={25} height={25} />
      </IconButton>
    </div>
  );
}

export default DarkModeToggle;
