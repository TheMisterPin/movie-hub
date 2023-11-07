import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './router/AppRoutes';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from 'styled-components';
import theme from './styled components/theme';
import './app.css';
import MoviesProvider from './context/MovieContext';



const App: React.FC = () => {
  return (
<Router>
  <AuthProvider>
    <ThemeProvider theme={theme}>
      <MoviesProvider> 
        <AppRoutes />
      </MoviesProvider>
    </ThemeProvider>
  </AuthProvider>
</Router>
  );
};

export default App;
