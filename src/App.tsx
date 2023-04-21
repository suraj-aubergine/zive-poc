import './App.scss';
import React from 'react';
import SuspenseLayout from 'router/suspense';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from 'theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <SuspenseLayout fallback={'Loading...'}>
      <RouterProvider router={router} />
    </SuspenseLayout>
    </ThemeProvider>
  );
}

export default App;
