import PropTypes from 'prop-types';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
// auth
import { useAuthContext } from 'src/auth/hooks';
// routes
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// theme
import { bgGradient } from 'src/theme/css';
// components
import Logo from 'src/components/logo';
import  Card from '@mui/material/Card';
import { HeaderSimple  as Header } from '../_common';

// ----------------------------------------------------------------------

// const METHODS = [
//   {
//     id: 'jwt',
//     label: 'Jwt',
//     path: paths.auth.jwt.login,
//     icon: '/assets/icons/auth/ic_jwt.svg',
//   },
// ];

export default function AuthClassicLayout({ children }) {
  // const { method } = useAuthContext();

  // const theme = useTheme();

  // const upMd = useResponsive('up', 'md');

  // const renderLogo = (
  //   <Logo
  //     sx={{
  //       zIndex: 9,
  //       position: 'absolute',
  //       m: { xs: 2, md: 5 },
  //     }}
  //   />
  // );

  // const renderContent = (
  //   <Stack
  //     sx={{
  //       width: 1,
  //       mx: 'auto',
  //       maxWidth: 480,
  //       px: { xs: 2, md: 8 },
  //       py: { xs: 15, md: 30 },
  //     }}
  //   >
  //     {children}
  //   </Stack>
  // );

  // const renderSection = (
  //   <Stack
  //     flexGrow={1}
  //     alignItems="center"
  //     justifyContent="center"
  //     spacing={10}
  //     sx={{
  //       ...bgGradient({
  //         color: alpha(
  //           theme.palette.background.default,
  //           theme.palette.mode === 'light' ? 0.88 : 0.94
  //         ),
  //         imgUrl: '/assets/background/overlay_2.jpg',
  //       }),
  //     }}
  //   >
  //     <Typography variant="h3" sx={{ maxWidth: 480, textAlign: 'center' }}>
  //       {title || 'Hi, Welcome back'}
  //     </Typography>

  //     <Box
  //       component="img"
  //       alt="auth"
  //       src={image || '/assets/illustrations/illustration_dashboard.png'}
  //       sx={{ maxWidth: 720 }}
  //     />

  //     <Stack direction="row" spacing={2}>
  //       {METHODS.map((option) => (
  //         <Tooltip key={option.label} title={option.label}>
  //           <Link component={RouterLink} href={option.path}>
  //             <Box
  //               component="img"
  //               alt={option.label}
  //               src={option.icon}
  //               sx={{
  //                 width: 32,
  //                 height: 32,
  //                 ...(method !== option.id && {
  //                   filter: 'grayscale(100%)',
  //                 }),
  //               }}
  //             />
  //           </Link>
  //         </Tooltip>
  //       ))}
  //     </Stack>
  //   </Stack>
  // );

  return (
    // <Stack
    //   component="main"
    //   direction="row"
    //   sx={{
    //     minHeight: '100vh',
    //   }}
    // >
    //   {renderLogo}

    //   {upMd && renderSection}

    //   {renderContent}
    // </Stack>
  <>
    <Header />
      <Box
        component="main"
        sx={{py: 12,
            display: 'flex',
            minHeight: '100vh',
            textAlign: 'center',
            px: { xs: 2, md: 0 },
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            '&:before': {
              width: 1,
              height: 1,
              zIndex: -1,
              content: "''",
              opacity: 0.24,
              position: 'absolute',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundImage: 'url(/assets/background/overlay_4.jpg)',
          },
        }}
      >
        <Card
          sx={{
            py: 5,
            px: 3,
            maxWidth: 420,
          }}
        >
          {children}
        </Card>
      </Box>
    </>
  );
}

AuthClassicLayout.propTypes = {
  children: PropTypes.node,
};

