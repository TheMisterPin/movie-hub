import React from 'react';

import AppRoutes from './router/AppRoutes';

import { ThemeProvider } from 'styled-components';
import theme from './styled components/theme';
import './app.css';
import MoviesProvider from './context/MovieContext';
import { UserProvider } from './context/UserContex';



const App: React.FC = () => {
  return (


    <UserProvider>
      <ThemeProvider theme={theme}>

        <MoviesProvider>

          <AppRoutes />

        </MoviesProvider>
      </ThemeProvider></UserProvider>

  );
};

export default App;
