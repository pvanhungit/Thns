'use client';

import { useTheme } from '@mui/material/styles';

import { ToastContainer as LibToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

// ----------------------------------------------------------------------

export function ToastContainer() {
  const theme = useTheme();
  return (
    <LibToastContainer
      theme={theme.palette.mode === 'dark' ? 'dark' : 'light'}
      closeOnClick
      pauseOnFocusLoss
      pauseOnHover
      autoClose={5000} // 5s
      position="top-right"
      stacked
    />
  );
}
