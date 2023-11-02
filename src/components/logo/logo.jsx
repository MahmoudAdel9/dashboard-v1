import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
// import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import { useDarkMode } from 'src/theme/DarkModeContext';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const { isDarkMode } = useDarkMode();

  // if (disabledLink) {
  //   return (
  //     <Box
  //       component="img"
  //       src="../assets/logo.png"
  //       sx={{ width: 140, height: 40, cursor: 'pointer', ...sx }}
  //     />
  //   );
  // }

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      {isDarkMode ? (
        <Box
          component="img"
          src="../assets/logo.png"
          sx={{ width: 140, height: 40, cursor: 'pointer', ...sx }}
        />
      ) : (
        <Box
          component="img"
          src="../assets/logo-black.png"
          sx={{ width: 140, height: 40, cursor: 'pointer', ...sx }}
        />
      )}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
